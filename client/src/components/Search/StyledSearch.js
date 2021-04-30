import styled from "styled-components"

export const StyledSearch = styled.div`
display: flex;
justify-content: center;
margin-bottom: 1rem;
margin-top: 1rem;


.formContainer {
display:flex;
justify-content: center;
align-content: center;
width: 80%;
height: 4rem;
}

.search{
display: flex;
}

input {
display: block;
width: 20rem;
height: 2rem;
font-size: 1rem;
font-weight: 300;
color: #212529;
background-color: #fff;
border: 1px solid #ced4da;
border-right: 0;
border-radius: 0.25rem;
margin-left: 0.5rem;
transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
}



.button {
height: 2.21rem;
border: 0;
background-color: rgb(167, 122, 71);
color: white;
border-radius: 0.2rem;
cursor: pointer;
}

.button:hover {
background-color:rgb(117, 86, 50); ;
}

.label {
padding-right: 0.5rem;
font-weight: 500;
}


@media (max-width: 480px) {
.formContainer{
    flex-direction: column;
}
}
`