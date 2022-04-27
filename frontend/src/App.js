import './styles/main.scss';
import LandingPage from './components/landing-page/LandingPage';
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom"
import Header from './components/Header';
import Error404 from './components/Error404';
import TransactionsList from './components/transactions/TransactionsList';
import Overlay from './components/Overlay';
import { Alert, AlertTitle, Stack } from '@mui/material';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { addAlert, deleteAlert } from '../src/store/slices/alertSlice';


function App() {
  const dispatch = useDispatch()

  const hey = useSelector((state) =>  console.log(state.alerts));
  const alerts = useSelector((state) => state.alerts);

  
  const addTimeOutAlert = (texti) => {
    const alertId = alerts.length;
    setTimeout(() => {
      dispatch(deleteAlert({id: alertId}))
    }, 3000)
    dispatch(addAlert({
      type: "success",
      title: "Success",
      text: texti,
      disappear: "timeout"
    }))
  }

  // useEffect(() => {
    
  // }, [alerts])

  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Routes>
            <Route exact path="/" element={<LandingPage/>} />
            <Route exact path="/transactions" element={<TransactionsList/>} />
            <Route path='/404' exact={true} element={<Error404/>} />
            <Route path="*"
                   element={<Navigate to="/404" replace />}
            />
        </Routes>
        <Stack className='stack-alert'  spacing={2} padding={2}>
          {
            alerts.map((alert, index) => {
              return <Alert key={index} severity={alert.type}>
                <AlertTitle>{alert.title}</AlertTitle>
                {alert.text}
              </Alert>
            })
          }
        </Stack>
        {/* <button type="button" onClick={() => addTimeOutAlert(Date.now())}> Click ne</button> */}
        {/* <Overlay /> */
        }
      </div>
    </BrowserRouter>
  );
}

export default App;
