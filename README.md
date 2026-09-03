# 📱 BlackCoffer - Social Media & Discovery App

A modern, high-performance, and responsive cross-platform mobile application built with **React Native**, **Expo SDK 57**, **Expo Router**, and **TypeScript**. Designed with a modular architecture, centralized theme management, and full responsiveness across compact phones, large devices, tablets, and web.

---

## ✨ Features

- 🧭 **Discover Feed**: Categorized content discovery feed with dynamic topic filtering (All, Technology, Entertainment, Sports, Health, Business, Lifestyles, Government).
- 📰 **Interactive Post Cards**:
  - High-resolution media presentation with aspect-ratio preservation.
  - Interactive Like, Share, and Comment handlers.
  - One-tap Follow / Following toggling with smooth transitions.
  - Location tags and view count indicators.
- 👤 **Profile Dashboard**:
  - User identity, location, and biography section.
  - Dynamic metrics tracker (Feed, Followers, Following, Blocked).
  - Drafts and Viewing History switcher with custom empty states.
- 🎨 **Centralized Design System (`theme.config.ts`)**:
  - Unified color palettes, typography scales, spacing tokens, border radii, and elevation shadows.
  - Responsive layout utilities (`isTablet()`, scale calculations, and content width caps).
- 📐 **Adaptive & Responsive Layout**:
  - Safe-area aware layouts adapted for iOS home indicator bars and Android navigation gestures.
  - Auto-centering and container width limits for tablets and iPads.
- 🍔 **Custom Drawer & Tab Navigation**: Seamless navigation powered by Expo Router with custom branded header and drawer sidebar.

---

## 🛠 Tech Stack

| Technology | Description |
| :--- | :--- |
| **Framework** | [React Native 0.86](https://reactnative.dev/) |
| **Platform** | [Expo SDK 57](https://expo.dev/) (Latest Stable) |
| **Routing** | [Expo Router](https://docs.expo.dev/router/introduction/) (File-based routing) |
| **Language** | [TypeScript](https://www.typescriptlang.org/) |
| **Package Manager** | [Yarn](https://yarnpkg.com/) (with `node-modules` linker) |
| **UI Components** | Custom Modular Component Library |
| **Icons** | [@expo/vector-icons](https://icons.expo.fyi/) (FontAwesome, Ionicons, Octicons, EvilIcons, Fontisto) |
| **Images** | [expo-image](https://docs.expo.dev/versions/latest/sdk/image/) (High-performance caching & transitions) |
| **Build Tooling** | [EAS Build](https://docs.expo.dev/build/introduction/) & Expo CLI |

---

## 📂 Project Structure

```text
├── app/                          # File-based routing & navigation
│   ├── (drawer)/                 # Drawer navigation group
│   │   ├── (tabs)/               # Bottom tabs navigation group
│   │   │   ├── _layout.tsx       # Tab bar configuration & safe area handling
│   │   │   ├── index.tsx         # Discover / Feed screen
│   │   │   └── profile.tsx       # User Profile screen
│   │   └── _layout.tsx           # Custom drawer sidebar & layout
│   └── _layout.tsx               # Root application layout
├── assets/                       # Static media, icons, and fonts
├── src/
│   ├── components/
│   │   ├── customHeader.tsx      # Branded adaptive header
│   │   └── ui/                   # Reusable UI component library
│   │       ├── avatar.tsx        # Avatar with fallback initials
│   │       ├── button.tsx        # Multi-variant button (primary, outline, ghost, danger)
│   │       ├── categoryFilter.tsx# Horizontal filter pill bar
│   │       ├── emptyState.tsx    # Clean placeholder empty states
│   │       ├── postCard.tsx      # Responsive interactive post card
│   │       └── statBox.tsx       # Profile metric statistics box
│   ├── config/
│   │   └── theme.config.ts       # Central theme tokens, colors & responsive helpers
│   └── staticData/
│       └── postData.ts           # Mock feed dataset & types
├── .yarnrc.yml                   # Yarn configuration
├── app.json                      # Expo application manifest
├── eas.json                      # EAS Build profiles
├── package.json                  # Dependencies & scripts
└── tsconfig.json                 # TypeScript configuration
```

---

## 🚀 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v18 or newer recommended)
- [Yarn](https://yarnpkg.com/)
- [Expo Go](https://expo.dev/go) app installed on your physical device (iOS / Android) or a simulator

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/krishnasoni6229-ai/BlackCofferAssignment.git
   cd BlackCofferAssignment
   ```

2. **Install dependencies:**
   ```bash
   yarn install
   ```

3. **Start the development server:**
   ```bash
   yarn start
   ```

---

## 📱 Running the App

After running `yarn start`, press one of the following in your terminal:

- `i` — Open in **iOS Simulator**
- `a` — Open in **Android Emulator / Connected Device**
- `w` — Open in **Web Browser**
- `r` — Reload the Metro bundler
- `c` — Show terminal QR code (for physical device scanning with Expo Go)

---

## 📦 Building for Production

### EAS Cloud Build (Recommended)

```bash
# Configure EAS project (first time only)
npx eas-cli build:configure

# Build standalone Android APK (Direct installation)
npx eas-cli build -p android --profile preview

# Build Android App Bundle (.aab for Google Play Store)
npx eas-cli build -p android --profile production

# Build iOS Simulator / Ad-hoc IPA
npx eas-cli build -p ios --profile preview
```

### Local Native Prebuild

```bash
# Generate native android/ and ios/ folders
npx expo prebuild

# Run locally on Android
npx expo run:android

# Run locally on iOS
npx expo run:ios
```

---

## 🎨 Theme & Customization

All design tokens are centralized in [`src/config/theme.config.ts`](./src/config/theme.config.ts):

- **Colors**: Easily customize brand primary, accents, surfaces, and text tones.
- **Typography**: Change system font presets, weights, and sizes.
- **Spacing & Radii**: Update padding, margins, and rounded corner tokens globally.
- **Breakpoints**: Customize tablet and desktop viewport thresholds.

## 💡 Ideas to Improve It Further

Here are key architectural, performance, and feature enhancements to take this application to production scale:

### 1. ⚡ Performance & State Management
- **TanStack Query (React Query) / RTK Query**: Implement smart server-state caching, automatic background refetching, and pagination (`useInfiniteQuery`) for endless feed scrolling.
- **FlashList (by Shopify)**: Replace `FlatList` with `@shopify/flash-list` for 5x–10x recycling performance and 60 FPS smooth scrolling on low-end Android devices.
- **Zustand / Redux Toolkit**: Introduce global client state management for user authentication sessions, bookmarking, and instant optimistic UI updates (e.g. instant like counter increment).

### 2. 🔍 Advanced Search & Real-Time Filtering
- **Debounced Global Search Bar**: Add a full-text search overlay in `CustomHeader` with keyword matching against post titles, descriptions, and user locations.
- **Multi-Filter Modal**: Enable combined filtering (e.g. by Category + Location radius + Date range).

### 3. 💬 Comments, Media & Rich Interactions
- **Bottom Sheet Comments Modal**: Interactive comments section using `@gorhom/bottom-sheet` with reply threads and nested mentions.
- **Multi-Media Carousel & Video Player**: Support multiple images per post via swipeable carousels, pinch-to-zoom (`react-native-image-zoom-viewer`), and short video clips using `expo-video` / `expo-av`.
- **Haptic Feedback**: Add micro-haptics (`expo-haptics`) on like, share, bookmark, and tab switches.

### 4. 🌐 Offline Mode & Local Persistence
- **WatermelonDB / MMKV Storage**: High-speed local database caching so users can view previously fetched feeds, drafts, and profiles even in low/no connectivity.
- **Optimistic Offline Sync**: Queue likes, comments, and post drafts offline, syncing automatically when network connection is restored with `@react-native-community/netinfo`.

### 5. 🔐 Authentication & Backend Integration
- **Auth Flow**: Implement JWT / OAuth 2.0 (Google, Apple Sign-In, Email/Password) with Supabase or Firebase Auth.
- **Push Notifications**: Real-time push notifications using `expo-notifications` for follower updates, likes, and trending topics.

### 6. 🧪 Automated Testing & CI/CD Pipeline
- **Unit & Component Testing**: Jest + `@testing-library/react-native` for component testing and business logic validation.
- **End-to-End (E2E) Testing**: Maestro or Detox automated tests for cross-platform user flow validation.
- **GitHub Actions CI/CD**: Automated linting, type-checking, and EAS preview builds on pull requests.

---

## 👤 Author

**Krishna Soni**
- Location: Indore, Madhya Pradesh
- GitHub: [@krishnasoni6229-ai](https://github.com/krishnasoni6229-ai)

---

## 📄 License

This project is licensed under the [MIT License](LICENSE).

