import styled from 'styled-components'

export const Container = styled.header`
background: var(--gray);

`
export const Content = styled.div`
max-width: 1120px;
margin: 0 auto;
padding:2rem 1rem 10rem;
display:flex;
align-items: center;
justify-content: space-between;

img{
    width: 10%;
}

button{ 

    font-size:1rem;
    color:#FFF;
    background:var(--gray-light);
    border:0 ;
    padding:1rem 2rem ;
    border-radius:0.25rem;


    transition:filter 0.2s;

    &:hover{
        filter: brightness(0.9);
    }

}

`