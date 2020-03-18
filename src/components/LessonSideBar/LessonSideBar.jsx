import "./LessonSidebar.css";

import React from "react";
import { Sidebar } from "../Reusable/Sidebar/Sidebar";
import { LessonPreview } from "../LessonPreview/LessonPreview";

export const LessonSidebar = props => {
  return (
    <Sidebar width={300}>
      <LessonPreview
        chapter={"1"}
        title={"Arrays"}
        width={300}
        progress={0.5}
      />
      <LessonPreview
        chapter={"2"}
        title={"Hash Tables"}
        width={300}
        progress={0}
      />
      <LessonPreview
        chapter={"2"}
        title={"Hash Tables"}
        width={300}
        progress={0}
      />
      <LessonPreview
        chapter={"2"}
        title={"Hash Tables"}
        width={300}
        progress={0}
      />
      <LessonPreview
        chapter={"2"}
        title={"Hash Tables"}
        width={300}
        progress={0}
      />
      <LessonPreview
        chapter={"2"}
        title={"Hash Tables"}
        width={300}
        progress={0}
      />
      <LessonPreview
        chapter={"2"}
        title={"Hash Tables"}
        width={300}
        progress={0}
      />
      <LessonPreview
        chapter={"2"}
        title={"Hash Tables"}
        width={300}
        progress={0}
      />
      <LessonPreview
        chapter={"2"}
        title={"Hash Tables"}
        width={300}
        progress={0}
      />
      <LessonPreview
        chapter={"2"}
        title={"Hash Tables"}
        width={300}
        progress={0}
      />
      <LessonPreview
        chapter={"2"}
        title={"Hash Tables"}
        width={300}
        progress={0}
      />
      <LessonPreview
        chapter={"2"}
        title={"Hash Tables"}
        width={300}
        progress={0}
      />
      <LessonPreview
        chapter={"2"}
        title={"Hash Tables"}
        width={300}
        progress={0}
      />
      <LessonPreview
        chapter={"2"}
        title={"Hash Tables"}
        width={300}
        progress={0}
      />
      <LessonPreview
        chapter={"2"}
        title={"Hash Tables"}
        width={300}
        progress={0}
      />

      <LessonPreview chapter={"3"} title={"Trees"} width={300} progress={0} />
    </Sidebar>
  );
};
