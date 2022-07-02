import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import './Header.css'
import Airbnb from './airbnb.png'
import Search from './search.png'
import weblogo from './weblogo.png'
import { useDisclosure, 
        Drawer,
        DrawerBody,
        DrawerOverlay,
        DrawerContent,
        DrawerCloseButton,
        Button,
        Menu,
        MenuButton,
        MenuItem,
        MenuList,
        MenuDivider

    } from '@chakra-ui/react'
import { MdMenu, MdPerson } from 'react-icons/md'
// import { TbLetterI } from 'react-icons/tb'
export const Header=()=>{
    const HeaderWrapper=styled.div`
    display:flex;
    // justify-content:center;
    // align-items:center;
    padding:15px;
    // overflow:hidden;
    position: fixed;
    top: 0;
    // border:1px solid red;
    width:90%;
    // height:400px;
    margin-top:10px;
    margin-bottom:12px;
    
`;

const StylesLink =styled(Link)`
    font-size:600;
    text-decoration:none;
    padding:6px;
`;
const styles={
    border:"none",
    backgroundColor :"white", 
    borderRadius:"18px", 
    fontSize:"14px", 
    padding:"10px 10px 10px 12px",
    cursor:"pointer",
    

};
const menu={
    zIndex: "200",
}

const {isOpen, onOpen, onClose}= useDisclosure()
const headerDrawer=React.useRef()
const whereDrawer=React.useRef()
const checkinDrawer=React.useRef()

    return (
        <HeaderWrapper>
            {/* left */}
            <div className='n-left'>
                <Link to=""><img src={Airbnb} alt="" style={{width:"20%"}}/></Link>
            </div>
            {/* middle */}
            <div className='n-middle'>
                <Menu closeOnSelect={false}>
                    <MenuButton as={Button}  className="middle-buttons"> <b>AnyWhere</b></MenuButton>
                    <MenuList style={{background:"white", boxShadow:"rgba(0, 0, 0, 0.16) 0px 1px 4px"}}>
                        <MenuItem style={styles}> 
                            <div className='drawer-nav'>
                                <Menu closeOnSelect={false}>
                                    <MenuButton as={Button}>Stays  </MenuButton>
                                    <MenuList>
                                    <MenuItem style={styles}>
                                        <div className='drawer-nav'>
                                                <Menu>
                                                    <MenuButton as={Button}> Where</MenuButton>
                                                    <MenuList>
                                                        <MenuItem >
                                                            <div className='where-menu'>
                                                                <div className='where-items'> <img src="https://a0.muscache.com/pictures/f9ec8a23-ed44-420b-83e5-10ff1f071a13.jpg" alt="" /> <p>I'm flexible</p></div>
                                                                <div className='where-items'> <img src="https://a0.muscache.com/im/pictures/7b5cf816-6c16-49f8-99e5-cbc4adfd97e2.jpg?im_w=320" alt="" /> <p>Europe</p></div>
                                                                <div className='where-items'> <img src="https://a0.muscache.com/im/pictures/dbb2b5ef-2efe-4099-81ac-c7b957f384ed.jpg?im_w=320" alt="" /> <p>United Kingdom</p></div>
                                                                <div className='where-items'> <img src="https://a0.muscache.com/im/pictures/4e762891-75a3-4fe1-b73a-cd7e673ba915.jpg?im_w=320" alt="" /> <p>United State</p></div>
                                                                <div className='where-items'> <img src="https://a0.muscache.com/im/pictures/f0ece7c0-d9b2-49d5-bb83-64173d29cbe3.jpg?im_w=320" alt="" /> <p>France</p></div>
                                                                <div className='where-items'> <img src="https://a0.muscache.com/im/pictures/d77de9f5-5318-4571-88c7-e97d2355d20a.jpg?im_w=320" alt="" /> <p>Southeast Asia</p></div>
                                                            </div>
                                                        </MenuItem>
                                                    </MenuList>
                                                </Menu>
                                                <Menu>
                                                <MenuButton as={Button}> Check in</MenuButton>
                                                <MenuList>
                                                    <MenuItem >
                                                        <input type="date" />
                                                    </MenuItem>
                                                </MenuList>
                                                </Menu>
                                                <Menu>
                                                <MenuButton as={Button}> Check out</MenuButton>
                                                <MenuList>
                                                    <MenuItem >
                                                        <input type="date" />
                                                    </MenuItem>
                                                </MenuList>
                                                </Menu>
                                                <Menu>
                                                <MenuButton as={Button}> Who <img src={Search} alt="" style={{width:"1.5rem", borderRadius:"50%"}}/></MenuButton>
                                                <MenuList>
                                                    <MenuItem >
                                                        <div>
                                                            <div> <p>Adults</p> </div>
                                                            <div> <p>Children</p> </div>
                                                            <div> <p>Infants</p> </div>
                                                            <div> <p>Pets</p> </div>
                                                        </div>
                                                    </MenuItem>
                                                </MenuList>
                                                </Menu>

                                        </div>
                                    </MenuItem>
                                    </MenuList>
                                </Menu>
                                <Menu closeOnSelect={false}>
                                    <MenuButton as={Button}>Experiences  </MenuButton>

                                    <MenuList>
                                    <MenuItem>
                                        <div className='drawer-nav'>
                                            <Menu>
                                                <MenuButton as={Button}> Where</MenuButton>
                                                <MenuList>
                                                    <MenuItem >
                                                        <div className='where-menu'>
                                                            <div className='where-items'> <img src="https://a0.muscache.com/pictures/f9ec8a23-ed44-420b-83e5-10ff1f071a13.jpg" alt="" /> <p>I'm flexible</p></div>
                                                            <div className='where-items'> <img src="https://a0.muscache.com/im/pictures/7b5cf816-6c16-49f8-99e5-cbc4adfd97e2.jpg?im_w=320" alt="" /> <p>Europe</p></div>
                                                            <div className='where-items'> <img src="https://a0.muscache.com/im/pictures/dbb2b5ef-2efe-4099-81ac-c7b957f384ed.jpg?im_w=320" alt="" /> <p>United Kingdom</p></div>
                                                            <div className='where-items'> <img src="https://a0.muscache.com/im/pictures/4e762891-75a3-4fe1-b73a-cd7e673ba915.jpg?im_w=320" alt="" /> <p>United State</p></div>
                                                            <div className='where-items'> <img src="https://a0.muscache.com/im/pictures/f0ece7c0-d9b2-49d5-bb83-64173d29cbe3.jpg?im_w=320" alt="" /> <p>France</p></div>
                                                            <div className='where-items'> <img src="https://a0.muscache.com/im/pictures/d77de9f5-5318-4571-88c7-e97d2355d20a.jpg?im_w=320" alt="" /> <p>Southeast Asia</p></div>
                                                        </div>
                                                    </MenuItem>
                                                </MenuList>
                                            </Menu>
                                            <Menu>
                                                <MenuButton as={Button}> Date </MenuButton>
                                                <MenuList>
                                                    <MenuItem >
                                                        <input type="date" />
                                                    </MenuItem>
                                                </MenuList>
                                            </Menu>
                

                                            <button><img src={Search} alt="" style={{width:"1.5rem", borderRadius:"50%"}}/></button>
                                        </div>

                                    </MenuItem>
                                    </MenuList>
                                </Menu>
                                <button><a href='https://www.airbnb.co.in/s/experiences/online' style={{textDecoration:"none", color:"black"}}>Online Experience</a></button>
                            </div>
                        </MenuItem>
                        {/* <MenuDivider /> */}
                        <hr />
                    </MenuList>
                </Menu>
                <Menu closeOnSelect={false}>
                    <MenuButton as={Button}  className="middle-buttons"> <b>Anyweek</b></MenuButton>
                    <MenuList style={{background:"white", boxShadow:"rgba(0, 0, 0, 0.16) 0px 1px 4px"}}>
                        <MenuItem style={styles}> 
                            <div className='drawer-nav'>
                                <Menu closeOnSelect={false}>
                                    <MenuButton as={Button}>Stays  </MenuButton>
                                    <MenuList>
                                    <MenuItem style={styles}>
                                        <div className='drawer-nav'>
                                                <Menu>
                                                    <MenuButton as={Button}> Where</MenuButton>
                                                    <MenuList>
                                                        <MenuItem >
                                                            <div className='where-menu'>
                                                                <div className='where-items'> <img src="https://a0.muscache.com/pictures/f9ec8a23-ed44-420b-83e5-10ff1f071a13.jpg" alt="" /> <p>I'm flexible</p></div>
                                                                <div className='where-items'> <img src="https://a0.muscache.com/im/pictures/7b5cf816-6c16-49f8-99e5-cbc4adfd97e2.jpg?im_w=320" alt="" /> <p>Europe</p></div>
                                                                <div className='where-items'> <img src="https://a0.muscache.com/im/pictures/dbb2b5ef-2efe-4099-81ac-c7b957f384ed.jpg?im_w=320" alt="" /> <p>United Kingdom</p></div>
                                                                <div className='where-items'> <img src="https://a0.muscache.com/im/pictures/4e762891-75a3-4fe1-b73a-cd7e673ba915.jpg?im_w=320" alt="" /> <p>United State</p></div>
                                                                <div className='where-items'> <img src="https://a0.muscache.com/im/pictures/f0ece7c0-d9b2-49d5-bb83-64173d29cbe3.jpg?im_w=320" alt="" /> <p>France</p></div>
                                                                <div className='where-items'> <img src="https://a0.muscache.com/im/pictures/d77de9f5-5318-4571-88c7-e97d2355d20a.jpg?im_w=320" alt="" /> <p>Southeast Asia</p></div>
                                                            </div>
                                                        </MenuItem>
                                                    </MenuList>
                                                </Menu>
                                                <Menu>
                                                <MenuButton as={Button}> Check </MenuButton>
                                                <MenuList>
                                                    <MenuItem >
                                                        <input type="date" />
                                                    </MenuItem>
                                                </MenuList>
                                                </Menu>
                                                

                                                <Menu>
                                                <MenuButton as={Button}> Who <img src={Search} alt="" style={{width:"1.5rem", borderRadius:"50%"}}/></MenuButton>
                                                <MenuList>
                                                    <MenuItem >
                                                    <div>
                                                            <div> <p>Adults</p> </div>
                                                            <div> <p>Children</p> </div>
                                                            <div> <p>Infants</p> </div>
                                                            <div> <p>Pets</p> </div>
                                                        </div>
                                                    </MenuItem>
                                                </MenuList>
                                                </Menu>

                                        </div>
                                    </MenuItem>
                                    </MenuList>
                                </Menu>
                                <Menu closeOnSelect={false}>
                                    <MenuButton as={Button}>Experiences  </MenuButton>

                                    <MenuList>
                                    <MenuItem>
                                        <div className='drawer-nav'>
                                            <Menu>
                                                <MenuButton as={Button}> Where</MenuButton>
                                                <MenuList>
                                                    <MenuItem >
                                                        <div className='where-menu'>
                                                            <div className='where-items'> <img src="https://a0.muscache.com/pictures/f9ec8a23-ed44-420b-83e5-10ff1f071a13.jpg" alt="" /> <p>I'm flexible</p></div>
                                                            <div className='where-items'> <img src="https://a0.muscache.com/im/pictures/7b5cf816-6c16-49f8-99e5-cbc4adfd97e2.jpg?im_w=320" alt="" /> <p>Europe</p></div>
                                                            <div className='where-items'> <img src="https://a0.muscache.com/im/pictures/dbb2b5ef-2efe-4099-81ac-c7b957f384ed.jpg?im_w=320" alt="" /> <p>United Kingdom</p></div>
                                                            <div className='where-items'> <img src="https://a0.muscache.com/im/pictures/4e762891-75a3-4fe1-b73a-cd7e673ba915.jpg?im_w=320" alt="" /> <p>United State</p></div>
                                                            <div className='where-items'> <img src="https://a0.muscache.com/im/pictures/f0ece7c0-d9b2-49d5-bb83-64173d29cbe3.jpg?im_w=320" alt="" /> <p>France</p></div>
                                                            <div className='where-items'> <img src="https://a0.muscache.com/im/pictures/d77de9f5-5318-4571-88c7-e97d2355d20a.jpg?im_w=320" alt="" /> <p>Southeast Asia</p></div>
                                                        </div>
                                                    </MenuItem>
                                                </MenuList>
                                            </Menu>
                                            <Menu>
                                                <MenuButton as={Button}> Date </MenuButton>
                                                <MenuList>
                                                    <MenuItem >
                                                        <input type="date" />
                                                    </MenuItem>
                                                </MenuList>
                                            </Menu>
                

                                            <button><img src={Search} alt="" style={{width:"1.5rem", borderRadius:"50%"}}/></button>
                                        </div>

                                    </MenuItem>
                                    </MenuList>
                                </Menu>
                                <button><a href='https://www.airbnb.co.in/s/experiences/online' style={{textDecoration:"none", color:"black"}}>Online Experience</a></button>
                            </div>
                        </MenuItem>
                        {/* <MenuDivider /> */}
                        <hr />
                    </MenuList>
                </Menu>
                <Menu closeOnSelect={false}>
                    <MenuButton as={Button}  className="middle-buttons-guest"> <b>Any guests</b></MenuButton>
                    <MenuList style={{background:"white", boxShadow:"rgba(0, 0, 0, 0.16) 0px 1px 4px"}}>
                        <MenuItem style={styles}> 
                            <div className='drawer-nav'>
                                <Menu closeOnSelect={false}>
                                    <MenuButton as={Button}>Stays  </MenuButton>
                                    <MenuList>
                                    <MenuItem style={styles}>
                                        <div className='drawer-nav'>
                                                <Menu>
                                                    <MenuButton as={Button}> Where</MenuButton>
                                                    <MenuList>
                                                        <MenuItem >
                                                            <div className='where-menu'>
                                                                <div className='where-items'> <img src="https://a0.muscache.com/pictures/f9ec8a23-ed44-420b-83e5-10ff1f071a13.jpg" alt="" /> <p>I'm flexible</p></div>
                                                                <div className='where-items'> <img src="https://a0.muscache.com/im/pictures/7b5cf816-6c16-49f8-99e5-cbc4adfd97e2.jpg?im_w=320" alt="" /> <p>Europe</p></div>
                                                                <div className='where-items'> <img src="https://a0.muscache.com/im/pictures/dbb2b5ef-2efe-4099-81ac-c7b957f384ed.jpg?im_w=320" alt="" /> <p>United Kingdom</p></div>
                                                                <div className='where-items'> <img src="https://a0.muscache.com/im/pictures/4e762891-75a3-4fe1-b73a-cd7e673ba915.jpg?im_w=320" alt="" /> <p>United State</p></div>
                                                                <div className='where-items'> <img src="https://a0.muscache.com/im/pictures/f0ece7c0-d9b2-49d5-bb83-64173d29cbe3.jpg?im_w=320" alt="" /> <p>France</p></div>
                                                                <div className='where-items'> <img src="https://a0.muscache.com/im/pictures/d77de9f5-5318-4571-88c7-e97d2355d20a.jpg?im_w=320" alt="" /> <p>Southeast Asia</p></div>
                                                            </div>
                                                        </MenuItem>
                                                    </MenuList>
                                                </Menu>
                                                <Menu>
                                                <MenuButton as={Button}> Check in</MenuButton>
                                                <MenuList>
                                                    <MenuItem >
                                                        <input type="date" />
                                                    </MenuItem>
                                                </MenuList>
                                                </Menu>
                                                <Menu>
                                                    <MenuButton as={Button}> Check out</MenuButton>
                                                    <MenuList>
                                                        <MenuItem >
                                                            <input type="date" />
                                                        </MenuItem>
                                                    </MenuList>
                                                </Menu>

                                                <Menu>
                                                <MenuButton as={Button}> Who <img src={Search} alt="" style={{width:"1.5rem", borderRadius:"50%"}}/></MenuButton>
                                                    <MenuList>
                                                        <MenuItem >
                                                        <div>
                                                            <div> <p>Adults</p> </div>
                                                            <div> <p>Children</p> </div>
                                                            <div> <p>Infants</p> </div>
                                                            <div> <p>Pets</p> </div>
                                                        </div>
                                                        </MenuItem>
                                                    </MenuList>
                                                </Menu>

                                        </div>
                                    </MenuItem>
                                    </MenuList>
                                </Menu>
                                <Menu closeOnSelect={false}>
                                    <MenuButton as={Button}>Experiences  </MenuButton>

                                    <MenuList>
                                    <MenuItem>
                                        <div className='drawer-nav'>
                                            <Menu>
                                                <MenuButton as={Button}> Where</MenuButton>
                                                <MenuList>
                                                    <MenuItem >
                                                        <div className='where-menu'>
                                                            <div className='where-items'> <img src="https://a0.muscache.com/pictures/f9ec8a23-ed44-420b-83e5-10ff1f071a13.jpg" alt="" /> <p>I'm flexible</p></div>
                                                            <div className='where-items'> <img src="https://a0.muscache.com/im/pictures/7b5cf816-6c16-49f8-99e5-cbc4adfd97e2.jpg?im_w=320" alt="" /> <p>Europe</p></div>
                                                            <div className='where-items'> <img src="https://a0.muscache.com/im/pictures/dbb2b5ef-2efe-4099-81ac-c7b957f384ed.jpg?im_w=320" alt="" /> <p>United Kingdom</p></div>
                                                            <div className='where-items'> <img src="https://a0.muscache.com/im/pictures/4e762891-75a3-4fe1-b73a-cd7e673ba915.jpg?im_w=320" alt="" /> <p>United State</p></div>
                                                            <div className='where-items'> <img src="https://a0.muscache.com/im/pictures/f0ece7c0-d9b2-49d5-bb83-64173d29cbe3.jpg?im_w=320" alt="" /> <p>France</p></div>
                                                            <div className='where-items'> <img src="https://a0.muscache.com/im/pictures/d77de9f5-5318-4571-88c7-e97d2355d20a.jpg?im_w=320" alt="" /> <p>Southeast Asia</p></div>
                                                        </div>
                                                    </MenuItem>
                                                </MenuList>
                                            </Menu>
                                            <Menu>
                                                <MenuButton as={Button}> Date </MenuButton>
                                                <MenuList>
                                                    <MenuItem >
                                                        <input type="date" />
                                                    </MenuItem>
                                                </MenuList>
                                            </Menu>
                

                                            <button><img src={Search} alt="" style={{width:"1.5rem", borderRadius:"50%"}}/></button>
                                        </div>

                                    </MenuItem>
                                    </MenuList>
                                </Menu>
                                <button><a href='https://www.airbnb.co.in/s/experiences/online' style={{textDecoration:"none", color:"black"}}>Online Experience</a></button>
                            </div>
                        </MenuItem>
                        {/* <MenuDivider /> */}
                        <hr />
                    </MenuList>
                </Menu>
                <Menu style={menu} closeOnSelect={false}>
                    <MenuButton as={Button}  className="middle-buttons"> <img src={Search} alt="" style={{width:"1.5rem", borderRadius:"50%"}}/></MenuButton>
                    <MenuList style={{background:"white", boxShadow:"rgba(0, 0, 0, 0.16) 0px 1px 4px"}}>
                        <MenuItem style={styles}> 
                            <div className='drawer-nav'>
                                <button>Stays</button>
                                <button>Experiences</button>
                                <button>Online Experience</button>
                            </div>
                        </MenuItem>
                        <MenuDivider />
                        <MenuItem>
                        <div className='drawer-nav'>
                                <button>Where</button>
                                <button>Check in</button>
                                <button>Check out</button>
                                <button>Who</button>
                                <button><img src={Search} alt="" style={{width:"1.5rem", borderRadius:"50%"}}/></button>
                            </div>
                        </MenuItem>
                    </MenuList>
                </Menu>
            </div>
            {/* right */}
            <div className='n-right'>
                <button> <a href="https://www.airbnb.co.in/host/homes"><b>Become a host</b> </a> </button>
                <img src={weblogo} alt="" style={{height:"20px",width:"20px", margin:"5px", cursor:"pointer"}}/>

                <Menu >
                    <MenuButton as={Button} leftIcon={<MdMenu size={20}/>} rightIcon={<MdPerson size={25}/>} className="stack"></MenuButton>
                    <MenuList style={{background:"white", boxShadow:"rgba(0, 0, 0, 0.16) 0px 1px 4px"}}>
                        <MenuItem style={styles}> <b>Log in</b> </MenuItem>
                        <MenuItem style={styles}>Sign up</MenuItem>
                        <MenuDivider/>
                        <a href="https://www.airbnb.co.in/host/homes"><MenuItem style={styles}> Host your home</MenuItem></a>
                        <a href="https://www.airbnb.co.in/host/experiences?from_nav=1"><MenuItem style={styles}>Host an experience</MenuItem></a>
                        <a href="https://www.airbnb.co.in/help?audience=guest"><MenuItem style={styles}>Help</MenuItem></a>
                    </MenuList>
                </Menu>
            </div>



                <Drawer 
                    isOpen={isOpen}
                    placement='top'
                    onClose={onClose}
                    finalFocusRef={headerDrawer}
                    >
                        <DrawerOverlay />
                        <DrawerContent className="drawer">
                            <DrawerCloseButton className="drawerCloseButton"/>

                            <DrawerBody>
                                <div className="header-drawer">
                                    <div className='drawer-nav'>
                                        <button>Stays</button>
                                        <button>Experiences</button>
                                        <button>Online Experience</button>
                                    </div>
                                    <div className='drawer-Body'>
                                        <div>
                                            <button ref={whereDrawer} onClick={onOpen}>
                                                <span>Where</span>
                                                <input type="text" name="" id="" placeholder='Search Desination'/>
                                            </button>
                                        </div>
                                        <div>
                                            <button ref={checkinDrawer} onClick={onOpen}>
                                                <span>Where</span>
                                                <input type="text" name="" id="" placeholder='Search Desination'/>
                                            </button>
                                        </div>
                                        <div>
                                            <button ref={checkinDrawer} onClick={onOpen}>
                                                <span>Where</span>
                                                <input type="text" name="" id="" placeholder='Search Desination'/>
                                            </button>
                                        </div>
                                        <div>
                                            <button ref={whereDrawer} onClick={onOpen}>
                                                <span>Where</span>
                                                <input type="text" name="" id="" placeholder='Search Desination'/>
                                            </button>
                                        </div>
                                        
                                        <button>search</button>
                                    </div>

                                    
                                </div>

                            </DrawerBody>
                        </DrawerContent>
                    </Drawer>

                    <Drawer 
                    isOpen={isOpen}
                    placement='bottom'
                    onClose={onClose}
                    finalFocusRef={whereDrawer}
                    >
                        <DrawerOverlay />
                        <DrawerContent className="drawer">
                            <DrawerCloseButton className="drawerCloseButton"/>

                            <DrawerBody>
                                <div>where</div>

                            </DrawerBody>
                        </DrawerContent>
                    </Drawer>
                
                    <Drawer 
                    isOpen={isOpen}
                    placement='bottom'
                    onClose={onClose}
                    finalFocusRef={checkinDrawer}
                    >
                        <DrawerOverlay />
                        <DrawerContent className="drawer">
                            <DrawerCloseButton className="drawerCloseButton"/>

                            <DrawerBody>
                                <div>Checkin</div>

                            </DrawerBody>
                        </DrawerContent>
                    </Drawer>
                

        </HeaderWrapper>
    )
}