import { Box, TextField, Button, Stack } from "@mui/material";
import { useState } from "react";

const form_fields = {
    firstName: '',
    lastName: '',
}


function App() {
    const [formData, setFormData] = useState(form_fields)

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch(`http://localhost:4000/api/user`, {
                method: 'POST',
                body: JSON.stringify(formData),
                headers: {
                    "Content-Type": "application/json"
                }
            });

            const _response = await response.json();

            if (response.ok) {
                console.log(_response.message);
            } else {
                console.log(_response.message);
            }
        }
        catch (error) {
            console.log('error');
        }
    };
    return (
        <div className="App">
            <Box sx={{ display: 'flex', justifyContent: 'center', marginTop: 15, alignItems: 'center'}}>
                <form onSubmit={handleSubmit}>
                <Stack spacing={2} direction="column">
                    <TextField
                        variant='outlined'
                        label='first name'
                        value={formData.firstName}
                        onChange={(e) => {
                            setFormData({
                                ...formData,
                                firstName: e.target.value
                            })
                        }}
                        sx={{ width: '600px'}}
                    />
                    <TextField
                        variant='outlined'
                        label='last name'
                        value={formData.lastName}
                        onChange={(e) => {
                            setFormData({
                                ...formData,
                                lastName: e.target.value
                            })
                        }}
                        sx={{ width: '600px'}}
                    />
                    <Button type='submit' sx={{ width: '600px'}} onSubmit={handleSubmit} variant='outlined'>save</Button>
                </Stack>
                </form>
            </Box>
        </div>
    );
}

export default App;
