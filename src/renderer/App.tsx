import { MemoryRouter as Router, Routes, Route } from 'react-router-dom';
import icon from '../../assets/icon.svg';
import './App.css';
import Switch, { SwitchProps } from '@mui/material/Switch';
import Checkbox, { CheckboxProps } from '@mui/material/Checkbox';
import Slider from '@mui/material/Slider';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import Box from '@mui/joy/Box';
import { styled } from '@mui/material/styles';
import FormControlLabel from '@mui/material/FormControlLabel';
import React from 'react';
import { bodypart } from 'main/bodypart';
import {Howl, Howler} from 'howler';
import path = require('path');

// var x = 10;

// const Hello = () => {
//   return (
//     <div>
//       <div className="Hello">
//         <img width="200" alt="icon" src={icon} />
//       </div>
//       <h1>pokeme</h1>
//       <div className="Hello">
//         <a
//           href="https://electron-react-boilerplate.js.org/"
//           target="_blank"
//           rel="noreferrer"
//         >
//           <button type="button">
//             <span role="img" aria-label="books">
//               📚
//             </span>
//             Read our docs
//           </button>
//         </a>
//         <a
//           href="https://github.com/sponsors/electron-react-boilerplate"
//           target="_blank"
//           rel="noreferrer"
//         >
//           <button type="button">
//             <span role="img" aria-label="books">
//               🙏
//             </span>
//             Donate
//           </button>
//         </a>
//       </div>
//     </div>
//   );
// };

const label = "hello, hello2"



function valuetext(value: number) {
  //console.log(value)
  return `${value}`;
  
}

// interface part {
//   text: string
// } 

function IntervalTime() {
  return (
    // <Box sx={{ width: 300 }}>
   
    <div className='cls_div_row'>
    <span className='cls_timer_span'></span>  
    <div className='cls_timer_div'>
    <span className='cls_timer'>1 <label className='cls_timer_label'>min</label></span>
    <span className='cls_timer'>30 <label className='cls_timer_label'>min</label></span>
    <span className='cls_timer'>1 <label className='cls_timer_label'>hour</label></span>
    </div>
      </div>
      
 
  );
}








// const UI = () => {
//   return (
//   //  heading();
//     DiscreteSlider()
    




//   );
// };

const ui2 = () => {
  return (
    <h3>Yo</h3>
  );
};



const handleOnChange = (t:any) => {
  // const updatedCheckedState = checkedState.map((item, index) =>
  //   index === position ? !item : item
  console.log(JSON.stringify(t));  
  
}

export default function App() {
  var sound = new Howl({
    src: ['file:///../Users/sanjay/git/pokeme_workspace/pokeme/assets/chime.mp3'] 
  });
  
  //sound.play();

 // console.log("path>>>>>>" + path.resolve())

  const [checkedState, setCheckedState] = React.useState(
    new Array(bodypart.length).fill(false)
  );
  const [isChecked, setIsChecked] = React.useState(false);

  const [sliderValue, setSliderValue] = React.useState(
    new Array(bodypart.length).fill(1)
  );

  const handleOnChangeSlider = (event: any, newValue: any) => {
    setSliderValue(newValue);
    console.log("slideval===" + newValue)
  };  

  function valuetext(value: number) {
    //console.log(value)
    return `${value}`;
    
  }

  const Heading = () => {
    return (
   <div>
    {/* <audio autoplay>
    <source src="../../assets/chime.mp3" type="audio/mpeg" id="track"/>
</audio> */}

        <div className='cls_div_title'>
      <p className='cls_title'>Reminders</p>
      
      <label className='cls_switch'> 
      <IOSSwitch sx={{ m: 1 }} checked={isChecked} onClick={()=>handleOnChange()}/></label>
      </div>
      <div className='cls_p'>Decide how often Pokeme should remind you to relax these:</div>
  
     
    
  
      </div>
    );
  };

  function DiscreteSlider(props: any) {
    return (
      // <Box sx={{ width: 300 }}>
      <div className='cls_div_row'>
        <span className='cls_checkbox'>
      <label><BpCheckbox checked={isChecked && checkedState[props.index]} onClick={()=>clicked(props.index)}/>{props.text}:</label>
      </span>
      <Box className='cls_slider'>
        <IOSSlider
          color="primary" 
          aria-label="Minutes"
          defaultValue={30}
          getAriaValueText={valuetext}
          valueLabelDisplay="off"
          step={10}
          marks
          min={0}
          max={60}
          size='small'
          disabled={!isChecked || !checkedState[props.index]}
          // onChange={handleOnChangeSlider}
          
          
          
        />
        </Box>
        </div>
   
    );
  }

  // function clicked(e: any){
  //   //const [checked, setChecked] = React.useState(false);
  //   setCheckedState(!checkedState);
  //   console.log("clicked>>>>>" + e);
  
  // }

  const handleOnChange = () => {
    setIsChecked(!isChecked);
  };

  const clicked = (position: any) => {
    const updatedCheckedState = checkedState.map((item, index) =>
      index === position ? !item : item
    );

    setCheckedState(updatedCheckedState);
  };

  return (
    <Router>
      <Routes>
        <Route path="/" element={
          <div>
          <Heading /> <IntervalTime /> 
          
          {bodypart.map(({name}, index)=> {

            return (

          // <DiscreteSlider text={name} onChange={() => handleOnChange(index)}/>
          <DiscreteSlider text={name} index={index}/>
            );

          })
          }
          
          {/* <DiscreteSlider text="Eyes"/>
          <DiscreteSlider text="Fingers"/> <DiscreteSlider text="Arms"/> <DiscreteSlider text="Legs"/>
          <DiscreteSlider text="Neck"/> <DiscreteSlider text="Water"/> <DiscreteSlider text="Posture"/>
          <DiscreteSlider text="Breath"/> */}
        </div>
        } />
      </Routes>
    </Router>
  );
}
const iOSBoxShadow =
  '0 3px 1px rgba(0,0,0,0.1),0 4px 8px rgba(0,0,0,0.13),0 0 0 1px rgba(0,0,0,0.02)';

const IOSSlider = styled(Slider)(({ theme }) => ({
  color: theme.palette.mode === 'dark' ? '#3880ff' : '#3880ff',
  height: 2,
  padding: '15px 0',
  '& .MuiSlider-thumb': {
    height: 10,
    width: 10,
    backgroundColor: '#fff',
    boxShadow: iOSBoxShadow,
    '&:focus, &:hover, &.Mui-active': {
      boxShadow:
        '0 3px 1px rgba(0,0,0,0.1),0 4px 8px rgba(0,0,0,0.3),0 0 0 1px rgba(0,0,0,0.02)',
      // Reset on touch devices, it doesn't add specificity
      '@media (hover: none)': {
        boxShadow: iOSBoxShadow,
      },
    },
  },
  '& .MuiSlider-valueLabel': {
    fontSize: 12,
    fontWeight: 'normal',
    top: -6,
    backgroundColor: 'unset',
    color: theme.palette.text.primary,
    '&:before': {
      display: 'none',
    },
    '& *': {
      background: 'transparent',
      color: theme.palette.mode === 'dark' ? '#fff' : '#000',
    },
  },
  '& .MuiSlider-track': {
    border: 'none',
  },
  '& .MuiSlider-rail': {
    opacity: 0.5,
    backgroundColor: '#bfbfbf',
  },
  '& .MuiSlider-mark': {
    backgroundColor: '#bfbfbf',
    height: 8,
    width: 1,
    '&.MuiSlider-markActive': {
      opacity: 1,
      backgroundColor: 'currentColor',
    },
  },
}));

const BpIcon = styled('span')(({ theme }) => ({
  borderRadius: 3,
  width: 16,
  height: 16,
  boxShadow:
    theme.palette.mode === 'dark'
      ? '0 0 0 1px rgb(16 22 26 / 40%)'
      : 'inset 0 0 0 1px rgba(16,22,26,.2), inset 0 -1px 0 rgba(16,22,26,.1)',
  backgroundColor: theme.palette.mode === 'dark' ? '#394b59' : '#f5f8fa',
  backgroundImage:
    theme.palette.mode === 'dark'
      ? 'linear-gradient(180deg,hsla(0,0%,100%,.05),hsla(0,0%,100%,0))'
      : 'linear-gradient(180deg,hsla(0,0%,100%,.8),hsla(0,0%,100%,0))',
  '.Mui-focusVisible &': {
    outline: '2px auto rgba(19,124,189,.6)',
    outlineOffset: 2,
  },
  'input:hover ~ &': {
    backgroundColor: theme.palette.mode === 'dark' ? '#30404d' : '#ebf1f5',
  },
  'input:disabled ~ &': {
    boxShadow: 'none',
    background:
      theme.palette.mode === 'dark' ? 'rgba(57,75,89,.5)' : 'rgba(206,217,224,.5)',
  },
}));

const BpCheckedIcon = styled(BpIcon)({
  backgroundColor: '#137cbd',
  backgroundImage: 'linear-gradient(180deg,hsla(0,0%,100%,.1),hsla(0,0%,100%,0))',
  '&:before': {
    display: 'block',
    width: 16,
    height: 16,
    backgroundImage:
      "url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'%3E%3Cpath" +
      " fill-rule='evenodd' clip-rule='evenodd' d='M12 5c-.28 0-.53.11-.71.29L7 9.59l-2.29-2.3a1.003 " +
      "1.003 0 00-1.42 1.42l3 3c.18.18.43.29.71.29s.53-.11.71-.29l5-5A1.003 1.003 0 0012 5z' fill='%23fff'/%3E%3C/svg%3E\")",
    content: '""',
  },
  'input:hover ~ &': {
    backgroundColor: '#106ba3',
  },
});

function BpCheckbox(props: CheckboxProps) {
  return (
    <Checkbox
      sx={{
        '&:hover': { bgcolor: 'transparent' },
      }}
      disableRipple
      color="default"
      checkedIcon={<BpCheckedIcon />}
      icon={<BpIcon />}
      inputProps={{ 'aria-label': 'Checkbox demo' }}
      {...props}
    />
  );
}

const IOSSwitch = styled((props: SwitchProps) => (
  <Switch focusVisibleClassName=".Mui-focusVisible" disableRipple {...props} />
))(({ theme }) => ({
  width: 42,
  height: 26,
  padding: 0,
  '& .MuiSwitch-switchBase': {
    padding: 0,
    margin: 2,
    transitionDuration: '300ms',
    '&.Mui-checked': {
      transform: 'translateX(16px)',
      color: '#fff',
      '& + .MuiSwitch-track': {
        backgroundColor: theme.palette.mode === 'dark' ? '#2ECA45' : '#65C466',
        opacity: 1,
        border: 0,
      },
      '&.Mui-disabled + .MuiSwitch-track': {
        opacity: 0.5,
      },
    },
    '&.Mui-focusVisible .MuiSwitch-thumb': {
      color: '#33cf4d',
      border: '6px solid #fff',
    },
    '&.Mui-disabled .MuiSwitch-thumb': {
      color:
        theme.palette.mode === 'light'
          ? theme.palette.grey[100]
          : theme.palette.grey[600],
    },
    '&.Mui-disabled + .MuiSwitch-track': {
      opacity: theme.palette.mode === 'light' ? 0.7 : 0.3,
    },
  },
  '& .MuiSwitch-thumb': {
    boxSizing: 'border-box',
    width: 22,
    height: 22,
  },
  '& .MuiSwitch-track': {
    borderRadius: 26 / 2,
    backgroundColor: theme.palette.mode === 'light' ? '#E9E9EA' : '#39393D',
    opacity: 1,
    transition: theme.transitions.create(['background-color'], {
      duration: 500,
    }),
  },
}));
