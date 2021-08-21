import Box from '@material-ui/core/Box';
import { useEffect, useState } from 'react';
import MugImg from './MugImg';

const layoutStyle = {
    width: '100%',
    color: 'white',
}

const centerStyle = {
    margin: '0 auto',
}

const Mugs = ({mugsRef}) => {
    const [data, setData] = useState([]);
    useEffect(() => {
        mugsRef.once('value', (snapshot) => {
            let mugRows = []
            snapshot.forEach((childSnapshot) => {
                mugRows.push(childSnapshot.val());
            });
            setData(mugRows);
          });
    },[]);
     
    return (
        <div style={layoutStyle}>
            <div style={centerStyle}>
                <Box style={{backgroundColor:"white"}} display="flex" justifyContent="flex-start" flexWrap="wrap" p={1}>
                        {
                            data && data.map((e,i) => {
                                return (
                                    <Box p={1} key={`${e.descripton}${i}`} minWidth="30%" >
                                        <MugImg rowData={e} />
                                    </Box>
                                )
                            })
                        }
                </Box>
            </div>
        </div>
    )
}

export default Mugs;