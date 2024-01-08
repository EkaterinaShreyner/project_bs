import "./App.css";
import React from "react";
import "bulma/css/bulma.min.css";
import { useState } from "react";
import { Button, Form, Icon, Box, Progress, Columns, Card } from "react-bulma-components";
import Letter from './letter.svg';

function ProgressBar() {
  const [valueProgress, setValueProgress] = useState(60);
  const colorProgress = 
    valueProgress > 10 && valueProgress < 80
    ? "is-warning"
    : valueProgress < 10
    ? "is-danger"
    : "is-success";

  return (
    <div>
      <span>
        {valueProgress}%
      </span>
      <Progress
        class={`progress ${colorProgress}`}
        max={100}
        value={valueProgress}/>
    </div>
    
  );
}

function RenderProgress() {
  return (
    <Columns>
      <Columns.Column>
          <p>
            ВЕРОЯТНОСТЬ УСПЕХА
          </p>
        {ProgressBar()}
      </Columns.Column>
      <Columns.Column>
        <Card className="card">
          <p>
            Но вообще-то вряд ли получится потому что…
          </p>
          <p>
            Узнать наиболее вероятные проблемы, которые у тебя возникнут по мнению нашего ИИ
          </p>
          <div className="centerContentResponsive">
            <Button color="black" className="buttonNoLeftRadius">
              Узнать  
            </Button>
          </div>
        </Card>
      </Columns.Column>
    </Columns>
  );
}

function RenderIdeaInput() {
  const [ideaValue, setIdeaValue] = useState("");
  const placeholderIdea = ideaValue === "" ? "" : "Опиши свою идею";
  return (
    <div>
      <span>
        {placeholderIdea}
      </span>
      <Columns>
        <Columns.Column>
          <input 
            class="input is-black" 
            placeholder={"Опиши свою идею"}
            size={9} 
            value={ideaValue} 
            onChange={(e) => setIdeaValue(e.target.value)}>
          </input>
        </Columns.Column>
        <Columns.Column size={3}>
          <Button color="info"  className="buttonNoLeftRadius">
            Оценить
          </Button>
        </Columns.Column>
      </Columns>
    </div>
  );
}


function App() {
  return (
    <Box>
      {RenderProgress()}
      {RenderIdeaInput()}
    </Box>
  );
}

export default App;