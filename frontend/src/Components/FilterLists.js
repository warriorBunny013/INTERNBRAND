import React from 'react';
import Details from './Details';
// import dataDetails from '../Data';
import { getDatas } from '../Api/api';
import { TagsInput } from "react-tag-input-component";
import { Slider} from 'rsuite';
import 'rsuite/dist/rsuite.min.css';
const FilterLists = () => {
  const [view,setView]=React.useState();
  const [dataset,setDataSet]=React.useState();
  const [renderItem,setRenderItem]=React.useState([])
  const [dataItem,setDataItem]=React.useState([])
  const [isActivePop,setIsActivePop]=React.useState(false)
  const [isActiveNew,setIsActiveNew]=React.useState(false)
  const [isActiveMark,setIsActiveMark]=React.useState(false)
  const [openModal,setOpenModal]=React.useState(false)
  const [selected, setSelected] = React.useState(["fullstack","marketing"]);
  const [selectedskills, setSelectedskills] = React.useState(["ReactJs","Photoshop"]);
  const [selectedlocation, setSelectedlocation] = React.useState(["kolkata","noida"]);
  const [selectedDuration, setSelectedDuration] = React.useState([]);
  const [selectedStipend, setSelectedStipend] = React.useState([]);
  const [selectedApplicants, setSelectedApplicants] = React.useState([]);
  const [selectedhome, setSelectedhome] = React.useState(false);
  const [selectedoffice, setSelectedoffice] = React.useState(false);
  const [selectedpart, setSelectedpart] = React.useState(false);
  const [selectedfull, setSelectedfull] = React.useState(false);


  const [renderCategory,setRenderCategory]=React.useState([])
  const [renderSkills,setRenderSkills]=React.useState([])
  const [renderDuration,setRenderDuration]=React.useState([])
  const [renderLocation,setRenderLocation]=React.useState([])
  const [renderTimings,setRenderTimings]=React.useState([])
  const [renderType,setRenderType]=React.useState([])
  const [renderStipend,setRenderStipend]=React.useState([])
  const [renderApplicants,setRenderApplicants]=React.useState([])

  const effectcan=React.useRef(false)
  React.useEffect(() => {
    if(effectcan.current===false){
      getAllDatas();
      console.log("rendered !!!!")
    }

   },[]);
  const getAllDatas= async () => {
    let response = await getDatas();
    setRenderItem(response.data);
    setDataItem(response.data);

    setRenderCategory(response.data);
    setRenderTimings(response.data);
    setRenderDuration(response.data);
    setRenderSkills(response.data);
    setRenderType(response.data);
    setRenderLocation(response.data);
    setRenderStipend(response.data);
    setRenderApplicants(response.data);

    console.log("BACKEND ",response.data)
    // console.log("Json ",dataDetails)
}
const handletypeoffice=(e)=>{
   setSelectedoffice(e.target.checked)
}
const handletypehome=(e)=>{
  setSelectedhome(e.target.checked)
}
const handleFulltime=(e)=>{
   setSelectedfull(e.target.checked)
}
const handleParttime=(e)=>{
  setSelectedpart(e.target.checked)
}
console.log("HOME: ",selectedhome," Office: ",selectedoffice)
  const handleApply=()=>{
    // getAllDatas();
//selected category    
    const updatedCat=renderCategory.map((data)=>{return data.category})
    const ans=updatedCat.filter((data)=>selected.includes(data))
    const finalans=renderCategory.filter((data)=>ans.includes(data.category))


  //selected duration

const updateddur=renderDuration.map((data)=>{return data.duration})
const ansdur=updateddur.filter((data)=>selectedDuration===data)
const finalansdur=renderDuration.filter((data)=>ansdur.includes(data.duration))
console.log("SELECTED DUARTION",finalansdur);

//selected stipend
const updatedsti=renderStipend.map((data)=>{return data.stipends})
const anssti=updatedsti.filter((data)=>selectedStipend*1000>=data)
const finalanssti=renderStipend.filter((data)=>anssti.includes(data.stipends))
console.log("Stipend",finalanssti);

//selected applicants
const updatedapp=renderApplicants.map((data)=>{return data.totalapplicant})
const ansapp=updatedapp.filter((data)=>selectedApplicants>=data)
const finalansapp=renderApplicants.filter((data)=>ansapp.includes(data.totalapplicant))
console.log("Applicants",finalansapp);

//selected type of work
const anstypehome=renderType.filter((data)=>(selectedhome===true && data.type==="home") || (selectedoffice===true && data.type==="office"));
console.log("ANSWER HOME",anstypehome)
// selected timings
const anstiming=renderTimings.filter((data)=>(selectedfull===true && data.timings==="fulltime") || (selectedpart===true && data.timings==="parttime"));
console.log("ANSWER Timings",anstiming)

  //selected location
  const updatedloc=renderLocation.map((data)=>{return data.location})
  const ansloc=updatedloc.filter((data)=>selectedlocation.includes(data))
  const finalloc=renderLocation.filter((data)=>ansloc.includes(data.location))
  console.log("LOCATION: ",finalloc)


//selected Skills 
    const updatedSkill=renderSkills.map((data)=>{return data.skills})
    const newupdatedSkill=updatedSkill.map((item)=>item.filter((data)=>selectedskills.includes(data)))
    // const finalansSkill=renderItem.map((data)=>data.skills)
    const ansskillfinal=renderSkills.filter((job) => {
      // Check if any of the skills in job.skills array matches with any skill in newarr
      return job.skills.some((skill) => newupdatedSkill.some((arr) => arr.includes(skill)));
    });
    console.log("final ans skills",ansskillfinal)
    console.log("final ans newupdatedskills",newupdatedSkill)

  // Create a new array by combining dataDetails and newarr
// const anotherdataDetails = finalans.map((item, index) => {
//   // Create a copy of the item
//   const newItem = { ...item };

//   // Check if the corresponding newarr item exists and is an array
//   if (ansskillfinal[index] && Array.isArray(ansskillfinal[index])) {
//     // Merge the skills arrays by removing duplicates
//     newItem.skills = Array.from(new Set([...newItem.skills, ...ansskillfinal[index]]));
//   }

//   return newItem;
// });

const intersection = finalans.filter((detail) =>
  ansskillfinal.some((anotherDetail) => detail.id === anotherDetail.id)
);
const intersectionnew = finalloc.filter((detail) =>
  intersection.some((anotherDetail) => detail.id === anotherDetail.id)
);
// const intersectionfinal = finalansdur.filter((detail) =>
// intersectionnew.some((anotherDetail) => detail.id === anotherDetail.id)
// );
// const intersectionstipend = finalanssti.filter((detail) =>
// intersectionnew.some((anotherDetail) => detail.id === anotherDetail.id)
// );
// const intersectionapp = finalansapp.filter((detail) =>
// intersectionstipend.some((anotherDetail) => detail.id === anotherDetail.id)
// );
const intersectiontype= anstypehome.filter((detail) =>
intersectionnew.some((anotherDetail) => detail.id === anotherDetail.id)
);
const intersectiontime= anstiming.filter((detail) =>
intersectiontype.some((anotherDetail) => detail.id === anotherDetail.id)
);

// console.log(intersection);
console.log("Filtered Datta",intersectiontime);

    setRenderItem(intersectiontime);

  }



  const filterBySearch = (event) => {
    // Access input value
    const query = event.target.value;
    // Create copy of item list
    var updatedList = [...renderItem];
    // Include all elements which includes the search query
    updatedList = updatedList.filter((item) =>item.company===query);
    // Trigger render with updated values
    setRenderItem(updatedList);
  };
 
  const handlePopular=()=>{
   const items=dataItem.filter((anitem)=>anitem.totalapplicant>100).map((item)=>{
      return item;
    })
    setRenderItem(items)
    setIsActivePop(true);
    setIsActiveNew(false);
    setIsActiveMark(false);
  }

  const handleBookmark=()=>{
    setRenderItem(dataItem)
    setIsActiveMark(true);
    setIsActiveNew(false);
    setIsActivePop(false);
  }
  const handleNew=()=>{
    const items=dataItem.filter((anitem)=>anitem.posted<=3).map((item)=>{
        return item;
      })
      setRenderItem(items)
      setIsActiveNew(true);
      setIsActivePop(false);
    setIsActiveMark(false);
  }

    return (<>
    
        <div className="flex flex-col">
            {/* filtering  */}
            <div className='flex'>
               <div className=" pb-8 flex gap-1">
                    <div onClick={handlePopular} className={`[&.active]:bg-purple-700 [&.active]:text-white rounded-md font-bold tracking-wider ${isActivePop?'active':''} px-10 py-2 rounded-md`}>Popular</div>
                    <div onClick={handleNew} className={`[&.active]:bg-purple-700 [&.active]:text-white ${isActiveNew?'active':''} rounded-md font-bold tracking-wider px-10 py-2 [&.active]:bg-blue-500`}>Newest</div>
                    <div onClick={handleBookmark} className={`[&.active]:bg-purple-700 [&.active]:text-white ${isActiveMark?'active':''} rounded-md font-bold tracking-wider px-5 py-2  [&.active]:bg-blue-500`}>Bookmarks</div>
                </div>
                <div className="flex ml-10 gap-1 pb-8">
                    <div className="flex rounded-md">
                        <input onChange={filterBySearch} className="px-6 rounded-l-xl 2xl:w-[120vh] xl:w-[100vh] md:w-[40vh] py-2"/>
                        <img src="search.png" alt=".."/>
                    </div>
                    <div onClick={()=>setOpenModal(!openModal)}>
                    <img className='cursor-pointer mt-3 ml-5' src='Filter.png' alt='filter'/>
                   </div>
                </div>
            </div>
       
            {/* cards and details */}
            <div className='flex'>
                {/* cards */}
                <div className="flex flex-wrap flex-col gap-5">
                  {renderItem.map((data,i)=>{
                return <button key={i} onClick={()=>{
                    setDataSet(data);
                    setView(i+1);
                    console.log("This item of: ",i+1," is cliecked!!")
                }} 
                className="px-6 hover:shadow-purple-500 py-2 bg-white flex flex-col gap-y-5 rounded-md shadow-md">
                    <div className="flex gap-20 justify-between">
                    <div className="flex flex-col flex-start">
                        <div className="font-bold text-black text-lg">{data.position}</div>
                        <span className="text-sm font-semibold text-slate-500">{data.company}</span>
                    </div>
                    <div><img alt='mark' src='bookmark.png'/></div>
                    </div>
                    <div className="flex gap-10 justify-between pt-2">
                    <div><img src={`${data.brand}`} style={{width:"2rem"}} alt='...'/></div>
                    <div className="flex shadow-md gap-2 font-bold border boder-slate-400 px-4 rounded-2xl">
                        <span className="border-r pr-2">{data.skills[0]}</span>
                        <span className="border-r pr-2">{data.skills[1]}</span>
                        <span className="border-r"> {data.skills[2]}</span>
                        <span className="font-bold text-blue-600">+{data.skills.length-3}</span>
                    </div>
                    </div>
                
                    <div className="grid text-black gap-2 grid-cols-2 gap-x-4">
                        <div className='flex flex-start font-bold'>{data.duration} Months</div>
                        <div className='font-bold'>{data.stipend}</div>
                        <div><span className='font-bold'>{data.totalapplicant} </span>Applicants</div>
                        <div>Ends in <span className='font-bold'>{data.endsin} days</span></div>
                    </div>
                </button>
                  }) 
                   }
                </div>
                {/* details */}
                {view ?<Details dataDetails={dataset}/>:"no data"}
                
            </div>
       
    </div>

    {openModal &&<div style={{ backgroundColor: "rgba(0,0,0,0.5)", position: "fixed",height: "100%", width: "100%", top: 0,left: 0, display: "flex" ,alignItems: "center",justifyContent: "center",overflow: "auto",zIndex: 99999}}>
    
    <div className='bg-white pt-0 pb-0 pl-0 rounded-xl pr-0'>
    <div className='flex justify-between'>
      <div>&nbsp;</div>
      <div className='text-2xl font-bold m-4  text-blue-700'>Filters</div>
    <button onClick={()=>setOpenModal(false)} className='text-xl text-blue-700 rounded-xl m-4 bg-blue-300 px-3'>X</button>
    </div>
        <div className='grid grid-cols-2 gap-x-14 gap-y-5 p-10'>
            <div>
                <div className='text-slate-700 text-lg font-bold'>Category</div>
                <TagsInput
                    value={selected}
                    onChange={setSelected}
                    name="category"
                    placeHolder="Enter category"
                />
            </div>

            <div>
                <div className='text-slate-700 text-lg font-bold'>Skills</div>
                <TagsInput
                    value={selectedskills}
                    onChange={setSelectedskills}
                    name="skills"
                    placeHolder="Enter Skills"
                />
            </div>
            <div>
              <div className='text-slate-700 text-lg font-bold'>Timings</div>
              <div className='flex'>
                <input type="checkbox" onClick={handleParttime}  name="" value=""/>
                <div className='bg-blue-200 font-bold text-blue-600 px-10 m-2 rounded-md py-1'>Part time</div>
              </div>
              <div className='flex'>
                <input type="checkbox" onClick={handleFulltime} name="" value=""/>
                <div className='bg-blue-200 font-bold text-blue-600 px-10 m-2 rounded-md py-1'>Full Time</div>
              </div>
              
            </div>
            <div>
              <div className='text-slate-700 text-lg font-bold'>Type</div>
              <div className='flex'>
                <input onClick={handletypehome} type="checkbox" name="" value=""/>
                <div className='bg-blue-200 font-bold text-blue-600 px-2 m-2 rounded-md py-1'>Work From Home</div>
              </div>
              <div className='flex'>
                <input onClick={handletypeoffice} type="checkbox" name="" value=""/>
                <div className='bg-blue-200 font-bold text-blue-600 px-10 m-2 rounded-md py-1'>In Office</div>
              </div>
            </div>
            <div>
              <div className='text-slate-700 text-lg font-bold'>Duration(Months)</div>
              <Slider
                    defaultValue={6}
                    min={1}
                    step={1}
                    max={6}
                    graduated
                    progress
                    renderMark={mark => {
                     return mark;
                    }}
                    onChange={setSelectedDuration}
                />
            </div>
            <div>
              <div className='text-slate-700 text-lg font-bold'>Location</div>
              <TagsInput
                    value={selectedlocation}
                    onChange={setSelectedlocation}
                    name="location"
                    placeHolder="Enter location"
                />
            </div>
             <div>
              <div className='text-slate-700 text-lg font-bold'>Stipend(In K rupees)</div>
              <Slider
                    defaultValue={10}
                    min={0}
                    step={10}
                    max={30}
                    graduated
                    progress
                    renderMark={mark => {
                     return <span>{mark}K</span>;
                    }}
                    onChange={setSelectedStipend}
                />
            </div>
            <div>
              <div className='text-slate-700 text-lg font-bold'>Applicants(no. who applied)</div>
              <Slider
                    defaultValue={100}
                    min={0}
                    step={50}
                    max={150}
                    graduated
                    progress
                    renderMark={mark => {
                     return mark;
                    }}
                    onChange={setSelectedApplicants}
                />
            </div>
        </div>

       
        <div className='flex pt-10 shadow-xl justify-between pb-5 px-10'>
            <button className='text-blue-700 text-lg cursor:pointer font-bold'>Clear all</button>
            <button className='bg-blue-700 px-5 py-2 rounded-xl cursor:pointer font-semi-bold text-lg text-white' onClick={handleApply}>Apply</button>
        </div>
</div>
</div> 
}
</>
    );
}

export default FilterLists;
