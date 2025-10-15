# Animation Architecture

## Overview

This portfolio uses a **row-based animation system** where each section (row) controls when it renders and triggers its internal animations.

## Architecture

```
AnimatedRow (timing/scroll trigger)
  └─> Section Component (image preloading)
      └─> Cards & Images (animations)
```

## Key Components

### 1. **AnimatedRow** (`app/common/AnimatedRow/`)

Controls WHEN a section renders based on:

- `immediate` - Renders instantly (for Hero)
- `time` - Renders after delay (for above-fold sections)
- `scroll` - Waits for minimum delay, THEN triggers when scrolled into view
  - The `delay` prevents premature triggering before page layout settles
  - After delay, uses intersection observer with `threshold`

**Props:**

- `triggerType`: `"immediate"` | `"time"` | `"scroll"`
- `delay`: Milliseconds to wait (required for `time`, optional base delay for `scroll`)
- `threshold`: 0-1 intersection ratio for scroll trigger (default: 0.3)
- `minHeight`: Placeholder height in pixels (default: 400)
  - **Critical for scroll**: Prevents multiple rows triggering simultaneously
  - Reserves space to keep scroll position stable
  - Set to approximate height of your row (measure card heights + gaps)

### 2. **ImagePreloadWrapper** (`app/common/ImagePreloadWrapper/`)

Handles image preloading for sections with images:

- Preloads all images off-screen
- Hides content until images ready
- Triggers callback when complete

### 3. **Card** (`app/common/Card/`)

Simple animated card component:

- `shouldAnimate` prop to trigger entrance
- `order` prop for stagger within row (0.15s per card)
- No global timing logic

## Critical Timing Details

### Placeholder Height (Scroll Stability)

**Problem**: Without placeholders, rows have 0 height until rendered. When scrolling:

1. Multiple rows are "in view" (but invisible)
2. They all trigger simultaneously
3. Page jerks as content suddenly appears

**Solution**: Use `minHeight` to reserve space:

```tsx
<AnimatedRow triggerType="scroll" delay={1500} minHeight={600}>
  <SectionAgentArt />
</AnimatedRow>
```

**Benefits**:

- Only one row triggers at a time (sequential)
- Scroll position stays stable
- Smoother user experience

### Card Entrance vs Internal Animations

**The Core Problem: Opacity Masking**

Cards and images animating simultaneously causes a visibility issue:

```tsx
// ❌ WRONG: Both start at the same time
<Card shouldAnimate={startAnimations}>     // opacity: 0 → 1
  <img animate={startAnimations ? ... />  // animating, but invisible!
</Card>
```

**What happens:**

1. Card starts: `opacity: 0` (completely invisible)
2. Image starts: rotating, scaling, etc. (you can't see it!)
3. Card at 500ms: `opacity: 0.3` (barely visible, image still animating)
4. Card at 1500ms: `opacity: 1` (fully visible, but image animation almost done)
5. Result: You only catch the tail end of the image animation

**The image IS animating** - but you're watching it through a window that's slowly becoming transparent!

---

**The Solution: Decouple Timing**

Cards and images need **different triggers**:

```tsx
// ✅ CORRECT: Cards start first, images wait
<Card shouldAnimate={true}>              // Starts immediately
  <img animate={startAnimations ? ... /> // Waits for card to be visible
</Card>

useEffect(() => {
  if (imagesLoaded && !startAnimations) {
    // Wait for cards to become "visible enough"
    // Not about cards finishing - about being able to SEE the images!
    setTimeout(() => setStartAnimations(true), 500);
  }
}, [imagesLoaded, startAnimations]);
```

**New Timeline**:

1. Row renders → Cards start animating (0ms, 150ms, 300ms...)
2. Cards ramping up opacity (~500-1500ms)
3. **Images start animating (500ms)** ← Cards visible enough to see them
4. Cards finish settling while images animate
5. Full sequence visible and smooth

---

**Key Insight: It's About Separation, Not Specific Values**

The delay doesn't have to be 500ms or 1800ms specifically. The critical factor is:

✅ **Cards must be visible BEFORE images start animating**

Adjust based on:

- How fast your card springs animate (damping, mass)
- How dramatic your image animations are (subtle fade vs big rotation)
- Personal preference (some opacity OK vs fully settled)

**Rule of thumb:**

- Subtle image animations: ~300-500ms delay
- Dramatic image animations: ~500-800ms delay
- Really want cards settled: ~1500-2000ms delay

## How to Add a New Section

### With Images:

```tsx
// 1. In page.tsx
<AnimatedRow triggerType="time" delay={1200} minHeight={450}>
  <MyNewSection />
</AnimatedRow>

// 2. In MyNewSection.tsx
const MyNewSection = () => {
  const [imagesLoaded, setImagesLoaded] = useState(false);
  const [startAnimations, setStartAnimations] = useState(false);

  useEffect(() => {
    if (imagesLoaded && !startAnimations) {
      // Wait for cards to become visible before starting image animations
      // Adjust delay based on your card animation speed and image complexity
      setTimeout(() => setStartAnimations(true), 500);
    }
  }, [imagesLoaded, startAnimations]);

  return (
    <ImagePreloadWrapper
      imageUrls={[...]}
      onLoadComplete={() => setImagesLoaded(true)}
    >
      <FlexRow>
        {/* Card animates immediately */}
        <Card shouldAnimate={true} order={0}>
          {/* Image waits for startAnimations */}
          <motion.img
            animate={startAnimations ? {visible state} : {hidden state}}
          />
        </Card>
      </FlexRow>
    </ImagePreloadWrapper>
  );
};
```

### Without Images:

```tsx
// 1. In page.tsx
<AnimatedRow triggerType="scroll" delay={1500} threshold={0.3} minHeight={400}>
  <MySimpleSection />
</AnimatedRow>;

// 2. In MySimpleSection.tsx
const MySimpleSection = () => {
  return (
    <FlexRow>
      <Card shouldAnimate={true} order={0}>
        {/* Content */}
      </Card>
    </FlexRow>
  );
};
```

## Current Page Structure

```tsx
<AnimatedRow triggerType="immediate" minHeight={500}>
  <HeroArea />  // ~500px (390px cards + text)
</AnimatedRow>

<AnimatedRow triggerType="time" delay={1200} minHeight={450}>
  <CodeEditor />  // ~450px (390px cards + margins)
</AnimatedRow>

<AnimatedRow triggerType="time" delay={2400} minHeight={600}>
  <SectionAgentArt />  // ~600px (530px cards + margins)
</AnimatedRow>

// OR for scroll-based:
<AnimatedRow triggerType="scroll" delay={1500} threshold={0.3} minHeight={600}>
  <SectionAgentArt />  // Placeholder reserves space, prevents multiple triggers
</AnimatedRow>
```

### How to Determine minHeight

1. Look at your card heights (e.g., `height={390}`)
2. Add gaps between cards and rows (~50-100px)
3. Round up to nearest 50px
4. **Too small**: Multiple rows trigger simultaneously
5. **Too large**: Extra whitespace, but safer

## Key Principles

### 🎯 **#1: Decouple Container and Content Animations**

**Never use the same trigger for both:**

```tsx
// ❌ BAD: Same trigger = opacity masking
<Card shouldAnimate={trigger}>
  <img animate={trigger ? ... />
</Card>

// ✅ GOOD: Different triggers = visible animations
<Card shouldAnimate={true}>
  <img animate={delayedTrigger ? ... />
</Card>
```

### 🎯 **#2: Separation Matters, Not Specific Values**

The exact delay (500ms vs 1800ms) is less important than:

- Cards starting BEFORE images
- Enough gap for opacity to ramp up
- Adjusted to your specific animation style

### 🎯 **#3: Think in Layers**

```
Layer 1: Row timing (when section appears)
Layer 2: Card timing (container becomes visible)
Layer 3: Content timing (images animate inside)
```

Each layer independent but orchestrated.

## Benefits

✅ **Simple**: 3 lines to add a new row  
✅ **Predictable**: Clear render → preload → animate flow  
✅ **Self-contained**: Each section manages its own state  
✅ **Flexible**: Mix time-based and scroll-based triggers  
✅ **Visible animations**: No more opacity masking issues

## Removed Complexity

❌ Order-based global delays on Cards  
❌ Complex ref management  
❌ `extraDelay` calculations  
❌ Manual coordination between sections  
❌ Simultaneous card/content triggering
