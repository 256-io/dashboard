
export interface ClassNames {
  content:string;
  card:string;
}

export default  () => ({
  card:{
    display:'flex',
    'flex-direction':'column',
    margin:4,
  },
  content: {
    display:'flex',
    'text-align':'center',
    outline:'1px solid red',
    'flex-direction':'column',
    'flex-grow':'1',
    'justify-content':'space-between',
  },
});
