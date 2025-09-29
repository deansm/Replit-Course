# Hair Salon Web App Design Guidelines

## Design Approach
**Glassmorphism Style**: A modern aesthetic featuring frosted glass effects, transparency, and layered translucent elements over vibrant gradient backgrounds.

## Core Design Elements

### A. Color Palette
**Primary Colors (Dark Mode)**:
- Background gradients: 285 85% 15% to 320 75% 25% (deep purple to magenta)
- Glass surfaces: 0 0% 100% with 8-12% opacity
- Text primary: 0 0% 95%
- Text secondary: 0 0% 75%

**Primary Colors (Light Mode)**:
- Background gradients: 200 80% 85% to 280 70% 90% (light blue to lavender)
- Glass surfaces: 0 0% 100% with 15-25% opacity
- Text primary: 0 0% 15%
- Text secondary: 0 0% 40%

**Accent Colors**:
- Success/Confirm: 150 65% 60%
- Warning/Edit: 35 85% 65%
- Error/Cancel: 0 70% 60%

### B. Typography
**Font Family**: Inter via Google Fonts CDN
**Hierarchy**:
- Headings: 600-700 weight, sizes from text-lg to text-4xl
- Body text: 400-500 weight, text-sm to text-base
- Labels: 500 weight, text-xs to text-sm

### C. Layout System
**Spacing Units**: Tailwind units of 2, 4, 6, 8, 12, 16
- Micro spacing: p-2, m-2 (buttons, form elements)
- Component spacing: p-4, p-6, gap-4
- Section spacing: p-8, p-12, gap-8
- Page margins: p-16

### D. Glassmorphism Component Library

**Glass Cards**:
- Background: rgba(255, 255, 255, 0.1-0.15)
- Border: 1px solid rgba(255, 255, 255, 0.2)
- Backdrop blur: backdrop-blur-md to backdrop-blur-lg
- Border radius: rounded-lg to rounded-xl
- Box shadow: subtle light reflections

**Navigation**:
- Semi-transparent header with backdrop-blur-xl
- Floating navigation elements with glass effect
- Active states with increased opacity and subtle glow

**Forms**:
- Transparent input fields with glass styling
- Focus states with enhanced border glow
- Submit buttons with glass morphism and hover effects

**Data Displays**:
- Appointment cards with layered transparency
- Customer profile sections with frosted glass panels
- Calendar grid with translucent date cells

**Overlays**:
- Modal dialogs with heavy backdrop blur
- Toast notifications with glass styling
- Dropdown menus with translucent backgrounds

### E. Interactive Elements

**Buttons**:
- Primary: Glass effect with subtle gradients
- Secondary: Outline style with backdrop blur when over images
- Disabled: Reduced opacity and blur

**Cards & Panels**:
- Hover states: Slightly increased opacity and enhanced shadows
- Active selections: Brighter borders and increased backdrop blur
- Layered depth through varying transparency levels

**Calendar & Scheduling**:
- Time slots with glass morphism styling
- Available/booked states through opacity variations
- Hover effects with gentle glow transitions

## Images Section
No large hero image required. Use subtle background patterns or textures that enhance the glassmorphism effect without competing with the frosted glass UI elements. Consider soft, blurred salon-related imagery as background elements beneath the glass interface layers.

## Key Principles
1. **Layered Transparency**: Stack multiple translucent elements to create depth
2. **Consistent Blur**: Use backdrop-blur consistently across all glass elements
3. **Subtle Borders**: 1px borders with low-opacity white/light colors
4. **Gradient Foundations**: Rich, colorful backgrounds that show through glass elements
5. **Light Reflections**: Subtle highlights and shadows to simulate glass surfaces
6. **Color Harmony**: Ensure all glass elements work cohesively over gradient backgrounds