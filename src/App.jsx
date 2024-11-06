import Profile from "./components/Profile/index.jsx"

export default function App (props){
  return(
    <div className="cor">
    <Profile 
    img={'./image.png'}
    name={'Wesley'}
    bio={'Full-stack desenveloper at Acme Inc.'}
    phone={'+55 (85) 98508-6142'}
    email={'wesley03soares08@gmail.com'}
    github={'github'}
    Linkedin={'Linkedin'}
    Figma={'Figma'}
    />
  </div>
  )
}
