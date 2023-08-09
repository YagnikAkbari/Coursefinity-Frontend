import CourseAccoridionItem from "./CourseAccoridionItem";

const DUMMY_COURSE_SECTIONS = [
  {
    id: "14a73ed4-2ad9-5f9c-a45d-f5669091b6c1",
    title: "Front End development",
    body: [
      {
        id: "c11",
        type: "video",
        content: "Course introduction",
      },
      {
        id: "c12",
        type: "video",
        content: "What will you learn",
      },
      {
        id: "c13",
        type: "quiz",
        content: "Quiz",
      },
      {
        id: "c14",
        type: "assignment",
        content: "Assignment",
      },
    ],
  },
  {
    id: "927df57a-4cc4-5e49-8380-9948febe088ai12",
    title: "Introduction to HTML",
    body: [
      {
        id: "c21",
        type: "video",
        content: "content 2",
      },
      {
        id: "c22",
        type: "video",
        content: "content 2",
      },
      {
        id: "c23",
        type: "assignment",
        content: "content 3",
      },
    ],
  },
];
function CourseAccordion() {
  return (
    <>
      {DUMMY_COURSE_SECTIONS.map((item) => {
        return <CourseAccoridionItem key={item.id} items={item} />;
      })}
    </>
  );
}

export default CourseAccordion;
