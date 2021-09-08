import React from "react";
import {
    InputGroup,
    InputGroupAddon,
    InputGroupButtonDropdown,
    Input,
    Button,
    DropdownToggle,
    DropdownMenu,
    DropdownItem
   } from 'reactstrap';

const CInput = ({message, sendMessage, setMessage}) =>{
    return(
        <div>
            <InputGroup size="sm">
                <Input
                    placeholder = "Send a Message"
                    name = "msg" 
                    id = "msg"
                    onChange={(e) => setMessage(e.target.value)}
                    onKeyPress={(e) => (e.key === "Enter") && sendMessage(e)}
                />
                <InputGroupAddon addonType="append">
                    <Button>
                        Send
                    </Button>
                </InputGroupAddon>
            </InputGroup>
            {/* <input 
                name="msg" 
                id = "msg"
                type="text" 
                onChange={(e) => setMessage(e.target.value)}
                onKeyPress={(e) => (e.key === "Enter") && sendMessage(e)}
            /> */}
        </div>
    );
};

export default CInput;
