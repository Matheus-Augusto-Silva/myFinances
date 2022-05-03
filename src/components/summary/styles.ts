import styled from "styled-components";

export const Container = styled.section`
display: grid ;
grid-template-columns: repeat(3, 1fr) ;
gap: 2rem ;
max-width: 1120px;
margin: auto;
margin-top: -6rem ;

div{
    background: var(--shape) ;
    padding: 1.25rem 2rem;
    border-radius:0.25rem ;
    color: var(--text-title);

    header {
    display: flex ;
    align-items: center;
    justify-content: space-between; 
    }

    strong {
    display: block; ;
    margin-top: 1rem;
    font-size: 2rem ;
    line-height: 3rem;
    font-weight: 500;
    }

    &.total-background {
       background : var(--green) ;
       color: white ;
    }

}

`