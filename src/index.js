import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';
import CommentDetail from './CommentDetail';
import ApprovalCard from './ApprovalCard';
const App = () =>{
    return( 
    <div className="ui container comments">
      <ApprovalCard>
      <CommentDetail
       author="sam"
      date="3:00PM"
       text="Its blooper"
       avatar={faker.image.avatar}
       /> 
       </ApprovalCard>
       <ApprovalCard><CommentDetail author="jane" date="4:00PM"text="Its plooper"   avatar={faker.image.avatar}/>     </ApprovalCard>
     <ApprovalCard> <CommentDetail author="sarah" date="5:00PM"text="Its dlooper"  avatar={faker.image.avatar}/></ApprovalCard>
     <ApprovalCard> <CommentDetail author="rodee" date="5:00PM"text="Its dlooper"  avatar={faker.image.avatar}/></ApprovalCard>

      </div>
    )};

ReactDOM.render(<App />,document.querySelector('#root'));