import "./App.css";
import EventsComponent from "./components/eventsComponent";
import FeedbackForm from "./components/feedbackForm";
import ImageCarousel from "./components/imageCarousel";
import Title from "./components/title";
import Counter from "./components/counter";
import Animals from "./components/animals";

function App() {
  return (
    <div>
      <EventsComponent />
      <FeedbackForm />
      <ImageCarousel />
      <Title />
      <Counter />
      <Animals />
    </div>
  );
}

export default App;
