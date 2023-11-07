import SingleCourse from './SingleCourse';

const CourseItems = ({ activeComponenet }: { activeComponenet: string }) => {
  return (
    <div className='flex flex-col gap-2.5'>
      {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((item) => {
        return <SingleCourse key={item} activeComponenet={activeComponenet} />;
      })}
    </div>
  );
};
export default CourseItems;
