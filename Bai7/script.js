const people = [
    { name: 'Wes', year: 1988 },
    { name: 'Kait', year: 1986 },
    { name: 'Irv', year: 1970 },
    { name: 'Lux', year: 2015 }
  ];

  const comments = [
    { text: 'Love this!', id: 523423 },
    { text: 'Super good', id: 823423 },
    { text: 'You are the best', id: 2039842 },
    { text: 'Ramen is my fav food ever', id: 123523 },
    { text: 'Nice Nice Nice!', id: 542328 }
  ];

  // Some and Every Checks
  // Array.prototype.some() // is at least one person 19 or older?
    // const is19=people.some(function(people){
    //     const nowYear=(new Date()).getFullYear();
    //     if(nowYear-people.year>=19){
    //         return true;
    //     }
    // });
    const is19=people.some(people=>((new Date()).getFullYear()-people.year>=19));
    console.log({is19});

  // Array.prototype.every() // is everyone 19 or older?
    const isAll19=people.every(people=>((new Date()).getFullYear()-people.year>=19));
    console.log({isAll19});

  // Array.prototype.find()
  // Find is like filter, but instead returns just the one you are looking for
  // find the comment with the ID of 823423
    // const commentID=comments.find(function(comment){
    //     if(comment.id===823423){
    //         return true;
    //     }
    // });
    const commentID=comments.find(comment=>(comment.id===823423));
    console.log(commentID);
  // Array.prototype.findIndex()
  // Find the comment with this ID
    const index=comments.findIndex(comment=>(comment.id===823423));
    console.log(index);
  // delete the comment with the ID of 823423
    const newComments=[
        ...comments.slice(0,index),
        ...comments.slice(index+1)
    ]
    console.table(newComments);