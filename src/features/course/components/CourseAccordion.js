import CourseAccoridionItem from "./CourseAccoridionItem";

function CourseAccordion({ modules = [] }) {
  return (
    <>
      {modules?.length > 0 ? (
        modules?.map((item) => {
          return <CourseAccoridionItem key={item._id} items={item} />;
        })
      ) : (
        <div className="d-flex items-center">
          <span className="pe-2">Couldn't found modules</span>
          <i class="fa-regular fa-face-frown"></i>
        </div>
      )}
    </>
  );
}

export default CourseAccordion;
