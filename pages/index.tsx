import Link from 'next/link'
import { Paper } from '@material-ui/core'

const lessons =[
  {
    id:1,
    title:'Set Up',
    url:'/lessons/setup',
    description:'Kickstart next js. Convert to typescript. Setup material-ui. Css-in-js in external files. Customize theme'
  },
  {
    id:2,
    title:'Grid Layout',
    url:'/lessons/grid-layout',
    description:'Illustration of how to use material ui for page layout'
  },
  {
    id:3,
    title:'Make Styles',
    url:'/lessons/make-styles',
    description:'Style based on theme'
  },
  {
    id:4,
    title:'Paper',
    url:'/lessons/paper',
    description:'Basically a background with a shadow'
  },
  {
    id:5,
    title:'Flex Properties',
    url:'/lessons/flex',
    description:'Basic For Flex Properties on Parent and how they affect the children'
  }
]



export default function Home() {
  return (
    <Paper className="container">
   
      <main>
      <div className="image-container">
    <img src={require(`public/vercel.png?trace`).trace} className='header-img'/>
    <img src={require(`public/vercel.png?webp`)} className='header-img'/>
    </div>
        <h1 className="title">
          Welcome to <a href="https://nextjs.org">Next.js!</a>
        </h1>
      
        <p className="description">
          Get started by editing <code>pages/index.js</code>
        </p>

        <div className="grid">
         {
           lessons.map(({id,title,url,description}) =>
           <Link key={id} href={url}>
           <a
            
            className="card"
          >
            <h3>{title} &rarr;</h3>
            <p>{description}</p>
          </a>
           </Link>)
         }
        </div>
      </main>

      <footer>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <img src={require("public/vercel.svg")} alt="Vercel Logo" className="logo" />
        </a>
      </footer>

      <style jsx>{`
      .container {
        min-height: 100vh;
        padding: 0 0.5rem;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        position:absolute;
      }
      
      main {
        padding: 5rem 0;
        flex: 1;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
      }
      
      footer {
        width: 100%;
        height: 100px;
        border-top: 1px solid #eaeaea;
        display: flex;
        justify-content: center;
        align-items: center;
      }
      
      footer img {
        margin-left: 0.5rem;
      }
      
      footer a {
        display: flex;
        justify-content: center;
        align-items: center;
      }
      
      a {
        color: inherit;
        text-decoration: none;
      }
      
      .title a {
        color: #0070f3;
        text-decoration: none;
      }
      
      .title a:hover,
      .title a:focus,
      .title a:active {
        text-decoration: underline;
      }
      
      .title {
        margin: 10px;
        line-height: 1.15;
        font-size: 4rem;
      }
      
      .title,
      .description {
        text-align: center;
      }
      
      .description {
        line-height: 1.5;
        font-size: 1.5rem;
      }
      
      code {
        background: #fafafa;
        border-radius: 5px;
        padding: 0.75rem;
        font-size: 1.1rem;
        font-family: Menlo, Monaco, Lucida Console, Liberation Mono,
          DejaVu Sans Mono, Bitstream Vera Sans Mono, Courier New, monospace;
      }
      
      .grid {
        display: flex;
        align-items: center;
        justify-content: center;
        flex-wrap: wrap;
      
        max-width: 800px;
        margin-top: 3rem;
      }
      
      .card {
        margin: 1rem;
        flex-basis: 45%;
        padding: 1.5rem;
        text-align: left;
        color: inherit;
        text-decoration: none;
        border: 1px solid #eaeaea;
        border-radius: 10px;
        transition: color 0.15s ease, border-color 0.15s ease;
      }
      
      .card:hover,
      .card:focus,
      .card:active {
        color: #0070f3;
        border-color: #0070f3;
      }
      
      .card h3 {
        margin: 0 0 1rem 0;
        font-size: 1.5rem;
      }
      
      .card p {
        margin: 0;
        font-size: 1.25rem;
        line-height: 1.5;
      }
      
      .logo {
        height: 1em;
      }
      
      @media (max-width: 600px) {
        .grid {
          width: 100%;
          flex-direction: column;
        }
      }
      .image-container: {
        position: relative:
       
      }
      .header-img {
        position: absolute;
        top: 0;
        left: 0;
        width: 300px;
        height: 60px;
      }
    `}</style>
     
    </Paper>
  )
}