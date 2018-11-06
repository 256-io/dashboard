
export interface ClassNames {
  content:string;
  card:string;
}

export default  () => ({
  card:{
    display:'flex',
    'flex-direction':'column',
    'min-width':'min-content',
  },
  content: {
    display:'flex',
    'text-align':'center',
    'flex-direction':'column',
    'flex-grow':'1',
    'justify-content':'space-between',
    'min-width':'min-content',
  },
});
