import { 
  GitHub, 
  // Logo, 
} from './icons'
// import { Logo } from 'threed-garden'

const Footer = () => (
  <footer className="p-4 flex items-center justify-between w-full bg-darkgray z-10 relative">
    <a href="https://threedgarden.com/#gltfjsx" target="_blank" rel="noreferrer">
      {/* <Logo /> */}
      🥕 ThreeD Garden: GLB-to-TSX Converter
    </a>
    <p className="text-xs">
      Made by{' '}
      <a
        className="underline hover:text-blue-600"
        href="https://github.com/marty-mcgee/threed-garden"
        target="_blank"
        rel="noreferrer">
        @marty-mcgee
      </a>{' '}
      &{' '}
      <a
        className="underline hover:text-blue-600"
        href="https://github.com/marty-mcgee/gltf-react-three/graphs/contributors">
        contributors
      </a>{' '}
      inspired by the{' '}
      <a className="underline hover:text-blue-600" href="https://github.com/pmndrs/gltfjsx">
        gltfjsx cli
      </a>
    </p>
    <a href="https://github.com/marty-mcgee/gltf-react-three/" target="_blank" rel="noreferrer">
      <GitHub />
    </a>
  </footer>
)

export default Footer
