import react from 'react'
import gbflagImg from '../assets/gbflag.png'
import usflagImg from '../assets/usflag.png'
import frflagImg from '../assets/frflag.png'
import caflagImg from '../assets/caflag.png'
import jmflagImg from '../assets/jmflag.png'
import cnflagImg from '../assets/cnflag.png'
import nlflagImg from '../assets/nlflag.png'
import egflagImg from '../assets/egflag.png'
import grflagImg from '../assets/grflag.png'
import inflagImg from '../assets/inflag.png'
import ieflagImg from '../assets/ieflag.png'
import itflagImg from '../assets/itflag.png'
import jpflagImg from '../assets/jpflag.png'
import knflagImg from '../assets/knflag.png'
import mxflagImg from '../assets/mxflag.png'
import phflagImg from '../assets/phflag.png'
import ptflagImg from '../assets/ptflag.png'
import myflagImg from '../assets/myflag.png'
import maflagImg from '../assets/maflag.png'
import hrflagImg from '../assets/hrflag.png'
import noflagImg from '../assets/noflag.png'
import ruflagImg from '../assets/ruflag.png'
import arflagImg from '../assets/arflag.png'
import esflagImg from '../assets/esflag.png'
import skflagImg from '../assets/skflag.png'
import trflagImg from '../assets/trflag.png'
import saflagImg from '../assets/saflag.png'
import vnflagImg from '../assets/vnflag.png'
import syflagImg from '../assets/syflag.png'
import dzflagImg from '../assets/dzflag.png'
import tnflagImg from '../assets/tnflag.png'
import plflagImg from '../assets/plflag.png'
import uaflagImg from '../assets/uaflag.png'
import uyflagimage from '../assets/uyflag.png'
const countries = [
  { title: 'United Kingdom', image: gbflagImg },
  { title: 'United States', image: usflagImg },
  { title: 'France', image: frflagImg },
  { title: 'Canada', image: caflagImg },
  { title: 'Jamaica', image: jmflagImg },
  { title: 'England', image: cnflagImg },
  { title: 'Netherlands', image: nlflagImg },
  { title: 'Egypt', image: egflagImg },
  { title: 'Greece', image: grflagImg },
  { title: 'India', image: inflagImg },
  { title: 'Ireland', image: ieflagImg },
  { title: 'Italy', image: itflagImg },
  { title: 'Japan', image: jpflagImg },
  { title: 'Saint Kitts and Nevis', image: knflagImg },
  { title: 'Mexico', image: mxflagImg },
  { title: 'Philippines', image: phflagImg },
  { title: 'Portugal', image: ptflagImg },
  { title: 'Malaysia', image: myflagImg },
  { title: 'Morocco', image: maflagImg },
  { title: 'Croatia', image: hrflagImg },
  { title: 'Norway', image: noflagImg },
  { title: 'Russia', image: ruflagImg },
  { title: 'Argentina', image: arflagImg },
  { title: 'Spain', image: esflagImg },
  { title: 'Slovakia', image: skflagImg },
  { title: 'Turkey', image: trflagImg },
  { title: 'Saudi Arabia', image: saflagImg },
  { title: 'Vietnam', image: vnflagImg },
  { title: 'Syria', image: syflagImg },
  { title: 'Algeria', image: dzflagImg },
  { title: 'Tunisia', image: tnflagImg },
  { title: 'Poland', image: plflagImg },
  { title:'Ukraine' ,image:uaflagImg},
  {title:'Uruguay' ,image : uyflagimage}
]
function Country() {
  return (
    <div className=" text-center text-white space-y-5  bg-black">
      <h2 className="text-2xl text-white font-bold mb-4">Browser Country</h2>
      <div className="grid grid-cols-2 sm:grid-cols-15 md:grid-cols-20 lg:grid-cols-15 xl:grid-cols-8  py-6 justify-center gap-2  ">
        {countries.map((country, index) => (
        <div
            key={index}
            className="group relative overflow-hidden rounded-lg shadow hover:scale-105 transition duration-300 cursor-pointer"
          >
          
            <img
              src={country.image}
              alt={country.title}
              className="w-full h-auto object-cover"
            /> 
            <span className="absolute inset-0 flex items-center justify-center text-white bg-black opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              {country.title}
            </span>
          </div>
          
        ))}
      </div>
    </div>
  )
}
export default Country