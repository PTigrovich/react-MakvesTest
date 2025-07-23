import styled from "styled-components";

export const SidebarContainer = styled.div<{
  $isOpened: boolean;
  $theme: "light" | "dark";
}>`
  background-color: var(
    --color-sidebar-background-${(props) => props.$theme}-default
  );
  color: var(--color-text-${(props) => props.$theme}-default);
  width: ${(props) => (props.$isOpened ? "200px" : "70px")};
  height: 600px;
  padding: 10px 0;
  border: groove 1px gray;
  border-radius: 20px;
  display: flex;
  
  flex-direction: column;
  justify-content: space-between;
  transition:  
  	 width 0.4s ease,
    background-color 0.4s ease-in-out,
    color 0.4s ease-in-out;

  & > div {
	 
    margin-left: ${(props) => (props.$isOpened ? "25px" : "0")};
    transition: margin-left 0.4s ease;
  }

  
  .theme-toggle {
	
    &:hover {
      background-color: var(--color-button-background-${props => props.$theme}-hover);
    }
  }

  .sidebar__title {
    opacity: ${(props) => (props.$isOpened ? 1 : 0)};
    visibility: ${(props) => (props.$isOpened ? "visible" : "hidden")};
    margin-left: ${(props) => (props.$isOpened ? "10px" : "0")};
    transition: opacity ${(props) => (props.$isOpened ? "1.0s" : "0.2s")} ease,
      visibility ${(props) => (props.$isOpened ? "1.0s" : "0.2s")} ease,
      margin-left ${(props) => (props.$isOpened ? "1.0s" : "0.4s")} ease;
    position: ${(props) => (props.$isOpened ? "absolute" : "absolute")};
	 
	 
  }

  & > div:first-child .sidebar__title {
    left: 30px;
	 user-select: none;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    pointer-events: none;
	 font-weight: bold;
	 color: var(--color-text-${props => props.$theme}-active);
  }

  & > div:first-child {
    display: flex;
    align-items: center;
    justify-content: ${(props) => (props.$isOpened ? "space-between" : "left")};
    margin-left: ${(props) => (props.$isOpened ? "20px" : "20px")};
    position: relative;
    height: 50px;
    transition: all 0.4s ease;
  }

  & > div:first-child img {
    width: 30px;
    height: 30px;
    object-fit: contain;
    transition: transform 0.4s ease;
  }

  & > div:first-child > div {
    position: ${(props) => (props.$isOpened ? "static" : "absolute")};
    right: ${(props) => (props.$isOpened ? "10px" : "-30px")};
    top: 10px;
    cursor: pointer;
    z-index: 10;
    transition: right 0.4s ease, opacity 0.4s ease, transform 0.4s ease;
    width: 20px;
    text-align: center;
  }

  & > div:not(:first-child) {
    margin-top: 20px;
	 padding-right: ${props => props.$isOpened ? '20px' : '0'};
    display: flex;
    flex-direction: column;
    transition: margin 0.4s ease;
	 
	 
  }

  & > div:not(:first-child) > div {
    color: var(--color-text-${props => props.$theme}-default);
    background-color: var(--color-button-background-${props => props.$theme}-default);
    
    margin: ${props => props.$isOpened ? "5px 0" : "5px 15px"};
    padding: ${props => props.$isOpened ? "10px 15px" : "10px 11px"};
    transition: 
        background-color 0.4s ease,
        color 0.4s ease,
        font-weight 0.4s ease,
        margin 0.4s ease;
    cursor: pointer;
    border-radius: 15px;

	 &:hover {
        background-color: var(--color-sidebar-background-${props => props.$theme}-hover);
        color: var(--color-text-${props => props.$theme}-hover);
    }

	 &.active {
        font-weight: bold;
        color: var(--color-text-${props => props.$theme}-active);
        background-color: var(--color-button-background-${props => props.$theme}-active);
   }

	/* tooltip стили */
	 position: relative;

	 &:hover::after {
    content: ${props => props.$isOpened ? 'none' : `attr(data-tooltip)`};
    position: absolute;
    left: 100%;
    top: 50%;
    transform: translateY(-50%);
    background-color: var(--color-text-light-active);
    color: var(--color-text-dark-hover);
    padding: 8px 12px;
    border-radius: 6px;
    font-size: 14px;
    white-space: nowrap;
    margin-left: 10px;
    opacity: 0;
    visibility: hidden;
    transition: opacity 0.4s ease, visibility 0.4s ease;
    z-index: 100;
    box-shadow: 0 2px 5px rgba(0,0,0,0.2);
    pointer-events: none;
	 border-radius: 15px;
  }

  &:hover::before {
    content: '';
    position: absolute;
    left: 100%;
    top: 50%;
    transform: translateY(-50%);
    width: 0;
    height: 0;
    border-top: 6px solid transparent;
    border-bottom: 6px solid transparent;
    border-right: 6px solid var(--color-sidebar-background-${props => props.$theme}-default);
    opacity: 0;
    visibility: hidden;
    transition: opacity 0.4s ease, visibility 0.5s ease;
    z-index: 101;
    pointer-events: none;
  }

  /*tooltip  при наведении*/
  &:hover {
    &::after, &::before {
      opacity: ${props => props.$isOpened ? 0 : 1};
      visibility: ${props => props.$isOpened ? 'hidden' : 'visible'};
    }
  }

  /* актив вкладка */
  &.active {
    font-weight: bold;
    color: var(--color-text-${props => props.$theme}-active);
    background-color: var(--color-button-background-${props => props.$theme}-active);
  }
    
	 user-select: none; 
    -webkit-user-select: none; 
    -moz-user-select: none; 
    -ms-user-select: none; 
	 pointer-events: auto;
  }

  & > div:last-child {
    margin-top: auto;
	 display: flex;
    flex-direction: column;
    align-items: center; 
    transition: none;
  }

  & > div > div:hover {
    background-color: var(--color-button-background-${(props) => props.$theme}-hover);
    color: var(--color-text-${(props) => props.$theme}-hover);
  }

  & > div > div:active,
  & > div > div:focus {
    color: var(--color-text-${(props) => props.$theme}-active);
    font-weight: bold;
  }

  
`;

export const ThemeToggle = styled.div<{
  $isOpened: boolean;
  $theme: "light" | "dark";
}>`
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 10px;
  margin: 15px 0;
  border-radius: 15px;
  transition: all 0.4s ease;

  

  & > svg {
    color: ${props => 
      props.$theme === 'light' 
        ? 'var(--color-icon-light)' 
        : 'var(--color-icon-dark)'};
    transition: color 0.4s ease;
  }

  

  &:active {
    transform: scale(0.98);
  }

  &:focus-visible {
    outline: 2px solid ${props => 
      props.$theme === 'light' 
        ? 'var(--color-focus-light)' 
        : 'var(--color-focus-dark)'};
    outline-offset: 2px;
  }
`;