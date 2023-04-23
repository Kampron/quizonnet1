import {
  Box,
  Flex,
  Text,
  IconButton,
  Button,
  Stack,
  Collapse,
  Icon,
  Link,
  Popover,
  PopoverTrigger,
  PopoverContent,
  useColorModeValue,
  useBreakpointValue,
  useDisclosure,
  Menu,
  MenuButton,
  Avatar,
  MenuList,
  MenuDivider,
  MenuItem,
} from '@chakra-ui/react';
import  menu  from '../assets/menu.svg'
import  close  from '../assets/close.svg'
import {
  ChevronDownIcon,
  ChevronRightIcon,
} from '@chakra-ui/icons';
import Logo from './Logo';

export default function Header() {
  const { isOpen, onToggle } = useDisclosure();

  return (
    <Box>
      <Flex
        className='glass'
        color={useColorModeValue('gray.600', 'white')}
        minH={'60px'}
        py={{ base: 2 }}
        px={{ base: 4 }}
        borderBottom={1}
        borderStyle={'solid'}
        borderColor={useColorModeValue('gray.200', 'gray.900')}
        align={'center'}>
        <Flex
          flex={{ base: 1, md: 'auto' }}
          ml={{ base: -2 }}
          display={{ base: 'flex', md: 'none' }}>

          <img src={isOpen ? close : menu} 
            alt="menu"
            className="w-[28px] h-[28px] object- contain "
            onClick={onToggle}
          />
        </Flex>
        <Flex flex={{ base: 1 }} justify={{ base: 'center', md: 'start' }} align='center' >
            <Box 
                textAlign={useBreakpointValue({ base: 'center', md: 'left' })}
              >
               <Logo className={'h-8 w-8 inline'} />
            </Box>

          <Flex display={{ base: 'none', md: 'flex' }} ml={10}>
            <DesktopNav />
          </Flex>
        </Flex>

        <Stack
          flex={{ base: 1, md: 0 }}
          justify={'flex-end'}
          align='center'
          direction={'row'}
          spacing={6}>
          <Button
            display={{ base: 'none', md: 'inline-flex' }}
            size={'sm'}
            fontSize={'xs'}
            fontWeight={600}
            color={'white'}
            bg={'brand.900'}
            href={'#'}
            _hover={{
              bg: 'brand.800',
            }}>
            Subscriber
          </Button>
           <Menu>
              <MenuButton
                as={Button}
                rounded={'full'}
                border="2px"
                variant={'link'}
                cursor={'pointer'}
                _hover={{
                borderColor: 'brand.800',
                }}
                minW={0}>
                <Avatar
                  size={'md'}
                  src={
                    'https://images.unsplash.com/photo-1493666438817-866a91353ca9?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&s=b616b2c5b373a80ffc9636ba24f7a4a9'
                  }
                />
              </MenuButton>
              <MenuList
                color={'brand.900'}
              >
                <MenuItem><Link href='/profile'>Profile</Link></MenuItem>
                <MenuItem>Settings</MenuItem>
                <MenuDivider />
                <MenuItem>Logout</MenuItem>
              </MenuList>
            </Menu>
        </Stack>

      </Flex>

      <Collapse in={isOpen} animateOpacity>
        <MobileNav />
      </Collapse>
    </Box>
  );
}

const DesktopNav = () => {
  const linkColor = useColorModeValue('gray.600', 'gray.200');
  const linkHoverColor = useColorModeValue('gray.800', 'white');
  const popoverContentBgColor = useColorModeValue('white', 'gray.800');

  return (
    <Stack direction={'row'} spacing={4}>
      {NAV_ITEMS.map((navItem) => (
        <Box key={navItem.label}>
          <Popover trigger={'hover'} placement={'bottom-start'}>
            <PopoverTrigger>
              <Link
                p={2}
                href={navItem.href ?? '#'}
                fontSize={'sm'}
                fontWeight={500}
                color={linkColor}
                _hover={{
                  textDecoration: 'none',
                  color: linkHoverColor,
                }}>
                {navItem.label}
              </Link>
            </PopoverTrigger>

            {navItem.children && (
              <PopoverContent
                border={0}
                boxShadow={'xl'}
                bg={popoverContentBgColor}
                p={4}
                rounded={'xl'}
                minW={'sm'}>
                <Stack>
                  {navItem.children.map((child) => (
                    <DesktopSubNav key={child.label} {...child} />
                  ))}
                </Stack>
              </PopoverContent>
            )}
          </Popover>
        </Box>
      ))}
    </Stack>
  );
};

const DesktopSubNav = ({ label, href, subLabel }) => {
  return (
    <Link
      href={href}
      role={'group'}
      display={'block'}
      p={2}
      rounded={'md'}
      _hover={{ bg: useColorModeValue('brand.700', 'gray.900') }}>
      <Stack direction={'row'} align={'center'}>
        <Box>
          <Text
            transition={'all .3s ease'}
            _groupHover={{ color: 'brand.800' }}
            fontWeight={500}>
            {label}
          </Text>
          <Text fontSize={'sm'}>{subLabel}</Text>
        </Box>
        <Flex
          transition={'all .3s ease'}
          transform={'translateX(-10px)'}
          opacity={0}
          _groupHover={{ opacity: '100%', transform: 'translateX(0)' }}
          justify={'flex-end'}
          align={'center'}
          flex={1}>
          <Icon color={'pink.400'} w={5} h={5} as={ChevronRightIcon} />
        </Flex>
      </Stack>
    </Link>
  );
};

const MobileNav = () => {
  return (
    <Stack
      bg={useColorModeValue('white', 'gray.800')}
      p={4}
      display={{ md: 'none' }}>
      {NAV_ITEMS.map((navItem) => (
        <MobileNavItem key={navItem.label} {...navItem} />
      ))}
    </Stack>
  );
};

const MobileNavItem = ({ label, children, href }) => {
  const { isOpen, onToggle } = useDisclosure();

  return (
    <Stack spacing={4} onClick={children && onToggle}>
      <Flex
        py={2}
        as={Link}
        href={href ?? '#'}
        justify={'space-between'}
        align={'center'}
        _hover={{
          textDecoration: 'none',
        }}>
        <Text
          fontWeight={600}
          color={useColorModeValue('gray.600', 'gray.200')}>
          {label}
        </Text>
        {children && (
          <Icon
            as={ChevronDownIcon}
            transition={'all .25s ease-in-out'}
            transform={isOpen ? 'rotate(180deg)' : ''}
            w={6}
            h={6}
          />
        )}
      </Flex>

      <Collapse in={isOpen} animateOpacity style={{ marginTop: '0!important' }}>
        <Stack
          mt={2}
          pl={4}
          borderLeft={1}
          borderStyle={'solid'}
          borderColor={useColorModeValue('gray.200', 'gray.700')}
          align={'start'}>
          {children &&
            children.map((child) => (
              <Link key={child.label} py={2} href={child.href}>
                {child.label}
              </Link>
            ))}
        </Stack>
      </Collapse>
    </Stack>
  );
};



const NAV_ITEMS = [
   {
    
     label: 'WASSCE',
     children: [
       {
         label: 'English',
         subLabel: 'Take a full objective test with standard timer',
         href: '/EnglishShs',
       },
       {
         label: 'Maths',
         subLabel: 'Take a full objective test with standard timer',
         href: '/mathsShs',
       },
       {
         label: 'Integrated Science',
         subLabel: 'Take a full objective test with standard timer',
         href: '/intscience',
       },
       {
        label: 'Social Studies',
         subLabel: 'Take a full objective test with standard timer',
        href: '#',
      },
      {
        label: 'ICT',
        subLabel: 'Take a full objective test with standard timer',
        href: '#',
      },
     ],
   },
   {
     label: 'BECE',
     children: [
       {
         label: 'English Language',
         subLabel: 'English objective for JHS',
         href: '/englishJhs',
       },
       {
         label: 'Maths',
         subLabel: 'Maths objective for JHS',
         href: '/mathsJhs',
       },
       {
         label: 'Integrated Science',
         subLabel: 'Science objective for JHS',
         href: '/intsciJhs',
       },
       {
         label: 'Social Studies',
         subLabel: 'Social Studies objective for JHS',
         href: '/sStudiesJhs',
       },
     ],
   },
   {
     label: 'GENERAL',
     children: [
       {
         label: 'Aptitude Test',
         subLabel: 'How smart are you',
         href: '#',
       },
       {
         label: 'Current Affairs',
         subLabel: 'Update your knowledge',
         href: '#',
       },
       {
         label: 'International',
         subLabel: 'world wide facts',
         href: '#',
       },
     ],
   },
 ];