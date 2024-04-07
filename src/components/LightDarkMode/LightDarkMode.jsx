import { useState } from "react"

const LightDarkMode = () => {
    const [isDark, setIsDark] = useState(false);

    const styles = {
        backgroundColor: isDark ? 'black' : 'white',
        color: isDark ? 'white' : 'black',
    }

    return(
        <div className="flex items-center justify-center h-screen ">
            <div style={styles}  className="border-[1px] rounded-lg border-black h-48 flex flex-col justify-center items-center p-5">
                <h1 className="text-2xl font-bold py-2">Click To Change Mode</h1>
                <button onClick={() => setIsDark(!isDark)} className="border-[1px] bg-white text-black border-black p-2 rounded-md font-bold">{ isDark ? 'Light Mode' : 'Dark Mode'}</button>
            </div>
        </div>
    )
}

export default LightDarkMode