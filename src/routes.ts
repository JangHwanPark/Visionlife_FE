import {createHashRouter} from 'react-router-dom';

// ETC
import Test from "./features/test/index.tsx";

// 🌍 Root Layout
import RootLayout from "./layout/RootLayout.tsx";

// 🏠 메인 페이지
import Home from "./features/home/index";

// 🏢 회사 정보
import Profile from "./features/profile/pages/Profile.tsx";
import History from "./features/profile/pages/History.tsx";
import ContactUs from "./features/profile/pages/ContactUs.tsx";

// 📈 비즈니스 개요
import Business from "./features/business-overview/index.tsx";
import Overview from "./features/business-overview/pages/Overview.tsx";
import Utex from "./features/business-overview/pages/Utex.tsx";

// 📰 뉴스
import NewsLayout from "./features/news/index";
import News from './features/news/pages/News.tsx';
import NewsDetail from "./features/news/pages/NewsDetail.tsx";

// 📦 제품 카탈로그
import Catalog from "./features/catalog";

// 📄 정책 및 약관
import PrivacyPolicy from "./pages/PrivacyPolicy.tsx";
import EmailNoCollection from "./pages/EmailNoCollection.tsx";
import TermsOfService from "./pages/TermsOfService.tsx";
import ProfileLayout from './features/profile';
import ScrollSnap from './features/test/pages/ScrollSnap.tsx';
import Utex2 from './features/business-overview/pages/Utex2.tsx';

export const router = createHashRouter([
  {
    path: '/',
    Component: RootLayout,
    children: [
      // 메인 페이지
      {
        index: true,
        Component: Home,
      },

      // 회사 소개
      {
        path: '/company/profile',
        Component: ProfileLayout,
        children: [
          {index: true, Component: Profile},
          {path: 'history', Component: History},
          {path: 'contact', Component: ContactUs}
        ],
      },

      // 비즈니스 페이지 (사업 개요 및 아이템)
      {
        path: '/business',
        Component: Business,
        children: [
          {path: 'overview/:slug', Component: Overview},
          {path: 'utex/:slug', Component: Utex},
          {path: 'utex2/:slug', Component: Utex2},
        ],
      },

      // 뉴스 페이지 (언론 보도)
      {
        path: '/company/news',
        Component: NewsLayout,
        children: [
          // slug 사용 예정
          {index: true, Component: News},
          {path: ':id', Component: NewsDetail},
        ],
      },

      // 카탈로그 (자료실)
      {
        path: '/company/catalogs',
        Component: Catalog,
      },

      // 정책 및 약관
      {
        path: "/policies",
        children: [
          { path: "privacy", Component: PrivacyPolicy },
          { path: "email-collection", Component: EmailNoCollection },
          { path: "terms", Component: TermsOfService },
        ],
      },

      // 테스트 페이지
      {
        path: '/test',
        Component: Test,
      },
      {
        path: '/test/scroll',
        Component: ScrollSnap,
      }
    ],
  },
]);
