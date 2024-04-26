import { useEffect } from "react";
import { usePageStore } from "../store/pageStore";

export const usePageNavigation = () => {
  const { pageIndex, setPageIndex } = usePageStore();

  useEffect(() => {
    // 뒤로 가기 또는 앞으로 가기 버튼 클릭 감지
    const handlePopState = () => {
      const currentIndex = window.history.state?.pageIndex || 0;
      setPageIndex(currentIndex);
    };

    window.addEventListener("popstate", handlePopState);

    // 컴포넌트가 언마운트될 때 이벤트 리스너 제거
    return () => {
      window.removeEventListener("popstate", handlePopState);
    };
  }, [setPageIndex]);

  // 페이지 인덱스 변경 함수
  const goToPreviousPage = () => setPageIndex(pageIndex - 1);
  const goToNextPage = () => setPageIndex(pageIndex + 1);

  return { goToPreviousPage, goToNextPage };
};
