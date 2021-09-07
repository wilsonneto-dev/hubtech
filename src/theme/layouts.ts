import styled from 'styled-components'

export const layouts = {
  Col: styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
  `,
  Row: styled.div`
    display: flex;
    flex-direction: row;
    width: 100%;
  `,
  Container: styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    max-width: 1300px;
  `
}
