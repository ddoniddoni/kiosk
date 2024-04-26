import { create } from "zustand";

// interface PageStoreType {
//   currentIndex: number;
//   goToNextScreen: () => void;
//   goToPreviousScreen: () => void;
//   goToFirstScreen: () => void;
//   setCurrentIndex: (index: number) => void;
// }

// export const usePageStore = create<PageStoreType>((set) => ({
//   currentIndex: 0,
//   goToNextScreen: () =>
//     set((state) => ({ currentIndex: state.currentIndex + 1 })),
//   goToPreviousScreen: () =>
//     set((state) => ({ currentIndex: state.currentIndex - 1 })),
//   goToFirstScreen: () => set({ currentIndex: 0 }),
//   setCurrentIndex: (index) => set(() => ({ currentIndex: index })),
// }));

interface PageState {
  pageIndex: number;
  setPageIndex: (pageIndex: number) => void;
}

export const usePageStore = create<PageState>((set) => ({
  pageIndex: 0,
  setPageIndex: (pageIndex: number) => set(() => ({ pageIndex })),
}));
