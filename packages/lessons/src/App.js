import React from "react";
import "./App.css";
import { extendTheme } from "native-base";
import { DEFAULT_THEME, AppShell, initializeI18n } from "@shiksha/common-lib";
import LessonPlansDetails from "pages/LessonPlansDetails";
import Lessonplans from './pages/Lessonplans'
import SingleLessonPlan from "pages/SingleLessonPlan";
import ExploreVideosList from "pages/ExploreVideosList";
// import Teaching from "pages/Teaching";
// import TeachingDetail from "pages/TeachingDetail";
// import WorksheetQuestionBank from "pages/WorksheetQuestionBank";
// import CreateWorksheet from "pages/CreateWorksheet";

function App() {
  const theme = extendTheme(DEFAULT_THEME);
  initializeI18n(
    ["lessonplans"],
    `${process.env.PUBLIC_URL}/locales/{{lng}}/{{ns}}.json`
  );
  const routes = [
    {
      path: "/lessons/list",
      component: Lessonplans,
    },
    {
      path: "/videos/list",
      component: ExploreVideosList,
    },
    // {
    //   path: "/worksheet/questionBank",
    //   component: QuestionBank,
    // },
    {
      path: "/lesson/:id",
      component: SingleLessonPlan,
    },
    // {
    //   path: "/worksheet/create",
    //   component: CreateWorksheet,
    // },
    // {
    //   path: "/worksheet/template",
    //   component: WorksheetTemplate,
    // },
    {
      path: "*",
      component: LessonPlansDetails,
    },
  ];
  const LoginComponent = React.lazy(() => import("core/Login"));

  return (
    <AppShell
      theme={theme}
      basename={process.env.PUBLIC_URL}
      routes={routes}
      AuthComponent={LoginComponent}
    />
  );
}

export default App;
