export const fetchQuizQuestions = async (topic: string) => {
    const response = await fetch(`http://127.0.0.1:8000/getquiz`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ topic }),
      mode : "cors"
    });
    if(!response.ok){
        throw new Error('Encountred Problem wile getting quiz')    
    }
    const data = await response.json();
    return data;
  };
  