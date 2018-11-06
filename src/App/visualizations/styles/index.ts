
export interface ClassNames {
  content:string;
  card:string;
  text:string;
}

export default  (imageURL?:string) => {
  const style = {
    card: {
      display: 'inline-flex',
      'flex-direction': 'column',
      margin: 4,
      'background-color':'#000000',
      background:`url('${imageURL}')`,
      'background-size':'cover',
      // 'width':'fit-content',
    },
    content: {
      display: 'flex',
      'text-align': 'center',
      'flex-direction': 'column',
      'flex-grow': '1',
      'justify-content': 'space-between',
      'background-color': 'rgba(12, 14, 88, 0.71)',
      'min-width':'fit-content',
    },
    text:{
      color:'white',
    },
  };

  return style;
};
