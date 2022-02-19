import { Outlet } from 'react-router';
export default function Weather() {
    return(
        <>
            <h1>Weather App</h1>
            <Outlet />
        </>
    )
}