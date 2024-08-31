// we define the Header component
const Header = ({ course }) => {
  return <h1>{course}</h1>;
};
//We define the Content component
const Content=({part1,part2,part3,exercises1,exercises2,exercises3}) => {
  return (
   <>
    <Part part={part1+' '+exercises1}/> 
    <Part part={part2+' '+exercises2}/> 
    <Part part={part3+' '+exercises3}/> 
  
   </> 
   );

};
//We define the Part component
const Part = ({ part }) => {
  return <p>{part}</p>;
};

 //we define App components
const App = () => {
  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14
 
//We define here the way we want everything to appear at the page
  return (
    <div>
      
      <Header course={course} />
      <Content part1={part1} exercises1={exercises1} part2={part2} exercises2={exercises2} part3={part3} exercises3={exercises3} />
      <Part part={`Number of exercises: ${exercises1 + exercises2+ exercises3} `} />
 
    </div>
  )
}

export default App