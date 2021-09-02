import styled from "styled-components";

export const Container = styled.div`

margin-top: 4rem;

table{
    width: 100%;
    border-spacing: 0 0.5rem;

    th {
        color: var(--text-b);
        font-weight: 400;
        padding: 1rem 2rem;
        text-align: left;
        line-height: 1.5rem;
    }
    tr{
              &:hover{
        filter: brightness(0.9)
        };
    }

    td{
        padding: 1rem 2rem;
        border: 0;
        background: var(--shape);
        color: var(--text-b);
        border-radius: 0.25rem;

  

        &:first-child{
            color: var(--text-t);
        }

        &.deposito{
            color: var(--green)
        }

        &.retirada{
            color: var(--red);
        }
    }
}
`;