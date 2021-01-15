import React from 'react';
import {Button} from './styled'


export default function ButtonLink(props){
    return(
        <Button href={props.href}>
            {props.children}
        </Button>
    )
}