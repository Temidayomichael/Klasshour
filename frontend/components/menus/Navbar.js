import {
	Box,
	Flex,
	Stack,
	Image,
	Button,
	Divider,
	Menu,
	MenuButton,
	MenuList,
	MenuItem,
	Container,
	MenuGroup,
	MenuOptionGroup,
	MenuItemOption,
	HStack,
	MenuDivider,
	Avatar,
	Text,
	Badge,
	useBreakpointValue,
	IconButton,
	Center,
} from '@chakra-ui/react'
import { useContext } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import {
	AiOutlineArrowRight,
	AiOutlineDashboard,
	AiOutlineQuestion,
} from 'react-icons/ai'
import AuthOptions from '../auth/authOptions'
import UserContext from '../../contexts/UserContext'
import { FaRegUser } from 'react-icons/fa'
import { MdAttachMoney } from 'react-icons/md'
import { GrNotification } from 'react-icons/gr'
import {
	IoLogOutOutline,
	IoSettingsOutline,
	IoWalletOutline,
} from 'react-icons/io5'
import { destroyCookie, parseCookies } from 'nookies'
import Sticky from 'react-sticky-el'
import { ChevronDownIcon, HamburgerIcon } from '@chakra-ui/icons'
import { json } from 'body-parser'
import useUserType from '../../hooks/useUserType'
import { PaystackButton } from 'react-paystack'


export default function Navbar(ctx) {
	const userData = useContext(UserContext)
	console.log('rooole:', userData.role == 'Student' ? true : false)
	const isStudent = useUserType()
	console.log('isStudent:', isStudent)
	const { API_URL } = process.env
	const router = useRouter()
	function isActive(route) {
		if (route == router.pathname) {
			return 'active'
		}
	}
	const register = () => router.push('/register')
	const login = () => router.push('/login')
	const jwt = parseCookies(ctx).jwt

	function logout() {
		destroyCookie(null, 'jwt')
		router.push('/login')
	}
	const mobileMenu = (
		<Menu >
			<MenuButton
				as={IconButton}

				aria-label='Options'
				_focus={{
					textDecoration: 'none',
				}}
				icon={<HamburgerIcon boxSize={['28', '24']} />}
				variant='outline'
				d='flex'
				
			/>
			<MenuList>

				<MenuItem  _focus={{ bg: 'blue.50' }}
					_hover={{ bg: 'blue.50' }}
					_active={{ bg: 'blue.50' }}

				>
					<Box fontSize={['7xl', '4xl', '5xl', '2xl', 'sm']}>
						{' '}
						<Link href='/' >
							<a className={isActive('/')}>HOME</a>
						</Link>{' '}
					</Box>
				</MenuItem>
				<MenuItem>
					<Box ml={5} fontSize={['7xl', '4xl', '5xl', '2xl', 'sm']}>
						{' '}
						<Link href='/requests' >
							<a className={isActive('/requests')}>REQUESTS</a>
						</Link>
					</Box>
				</MenuItem>
				<MenuItem >
					<Box ml={5} fontSize={['7xl', '4xl', '5xl', '2xl', 'sm']}>
						{' '}
						<Link href='/become_a_tutor' >
							<a _hover={{ color: 'red' }} className={isActive('/become_a_tutor')}>BECOME A TUTUOR</a>
						</Link>
					</Box>
				</MenuItem>
				<MenuItem>
					<Box ml={5} fontSize={['7xl', '4xl', '5xl', '2xl', 'sm']}>
						{' '}
						<Link href='/faq'>
							<a className={isActive('/faq')}>FAQ</a>
						</Link>{' '}
					</Box>
				</MenuItem>
				<MenuItem>
					<Box ml={5} fontSize={['7xl', '4xl', '5xl', '2xl', 'sm']}>
						{' '}
						<Link href='/about-us' >
							<a className={isActive('/about-us')}>ABOUT US</a>
						</Link>{' '}
					</Box>
				</MenuItem>
				<MenuItem>
					<Box ml={5} fontSize={['7xl', '4xl', '5xl', '2xl', 'sm']}>
						{' '}
						<Link href='/support'>
							<a className={isActive('/support')}>SUPPORT</a>
						</Link>
					</Box>
				</MenuItem>

			</MenuList>
		</Menu>
	)
	const mainMenu = jwt ? (
		<Flex >
			<Center >
				<Badge ml='5' colorScheme='green'>
					{userData.role}
				</Badge>
			</Center>
			<Box mx='5' >
				<Menu >
					<MenuButton
						as={IconButton}
						_active={{
							bg: '0',
						}}
						_focus={{
							bg: '0',
						}}
						rounded='full'
						_hover={{ bg: '0' }}
						icon={<IoWalletOutline />}
					/>
					<MenuList p='5'>
						<Text fontSize='sm' fontWeight='bold' color='gray.500'>
							Walet Balance:{' '}
							<Text
								fontSize='lg'
								color={
									userData.role == 'Student'
										? userData.students[0].user.wallet.Balance > 1000
											? 'green.400'
											: 'red.500'
										: userData.tutors[0].user.wallet.Balance > 1000
											? 'green.400'
											: 'red.500'
								}>
								{JSON.stringify(
									new Intl.NumberFormat('ja-JP', {
										style: 'currency',
										currency: 'NGN',
									}).format(
										userData.role == 'Student'
											? userData.students[0].user.wallet.Balance
											: userData.tutors[0].user.wallet.Balance,
									),
								).replace(/"/g, '')}
							</Text>
						</Text>
						<Box w='100%' align='right' >
							<MenuDivider my='5' />
							{isStudent ? (
								<Button
									as={PaystackButton}
									colorScheme='green'
									size='sm'
									mr='4'
									variant='outline'
									email={userData.students[0].user.email}
									amount='10'
									reference={new Date().getTime().toString()}
									onSuccess={(reference) =>
										console.log(reference, data)
									}
									publicKey={process.env.PAYSTACK_PUBLICKEY}>
									Top Up
								</Button>
							) : (
								<Button variant='outline' color='blackAlpha'>
									Withdraw
								</Button>
							)}
						</Box>
					</MenuList>
				</Menu>
			</Box>
			<Menu isLazy>
				<Avatar
					as={MenuButton}
					colorScheme='red'
					name={
						userData.role == 'Student'
							? userData.students[0].user.fullname
							: userData.tutors[0].user.fullname
					}
					size='sm'
				/>
				<MenuList>
					{/* <MenuOptionGroup title="Signed in as ">

                                        </MenuOptionGroup> */}
					<MenuGroup
						title={`Signed in as ${userData.role == 'Student'
							? userData.students[0].user.username
							: userData.tutors[0].user.username
							}`}>
						{/* <Text pl='3'>
							 <Text fontWeight='bold'></Text>
						</Text> */}
						<MenuDivider />
						<MenuItem
							_hover={{ bg: 'blue.50' }}
							_focus={{ bg: 'blue.50' }}
							_active={{ bg: 'blue.50' }}
							onClick={() => {
								router.push('/dashboard')
							}}
							icon={<AiOutlineDashboard />}>
							Dashboard
						</MenuItem>
						<MenuItem
							_hover={{ bg: 'blue.50' }}
							_focus={{ bg: 'blue.50' }}
							_active={{ bg: 'blue.50' }}
							onClick={() => {
								router.push(
									'/profile',
									`${userData.role == 'Student'
										? userData.students[0].user.username
										: userData.tutors[0].user.username
									}`,
								)
							}}
							icon={<FaRegUser />}>
							Profile
						</MenuItem>
						<MenuItem
							_hover={{ bg: 'blue.50' }}
							_focus={{ bg: 'blue.50' }}
							_active={{ bg: 'blue.50' }}
							icon={<MdAttachMoney />}>
							Pricing
						</MenuItem>
						<MenuItem
							_hover={{ bg: 'blue.50' }}
							_focus={{ bg: 'blue.50' }}
							_active={{ bg: 'blue.50' }}
							icon={<AiOutlineQuestion />}>
							About Klasshour
						</MenuItem>
						<MenuItem
							_hover={{ bg: 'blue.50' }}
							_active={{ bg: 'blue.50' }}
							_focus={{ bg: 'blue.50' }}
							icon={<IoSettingsOutline />}>
							Account
						</MenuItem>
						<MenuDivider />
						<MenuItem
							_hover={{ bg: 'blue.50' }}
							_active={{ bg: 'blue.50' }}
							onClick={logout}
							size='sm'
							icon={<IoLogOutOutline />}
							colorScheme='red'
							variant='outline'>
							Logout
						</MenuItem>
					</MenuGroup>
				</MenuList>
			</Menu>
		</Flex>
	) : (
		<Center>
			<Button

				borderColor='#161B45'
				rightIcon={<AiOutlineArrowRight />}
				color='#161B45'
				_hover={{ opacity: '0.9' }}
				variant='outline'
				_active={{
					bg: '#E7E8EC',
				}}
				size='sm'
				onClick={login}
				mr={4}>
				Log In{' '}
			</Button>
			<Button
				bg='#161B45'
				rightIcon={<AiOutlineArrowRight />}
				color='white'
				_hover={{ opacity: '0.9' }}
				_active={{
					bg: ' #211221',
				}}
				size='sm'
				onClick={register}>
				Register
			</Button>
		</Center>
	)

	const menu = useBreakpointValue({ base: mobileMenu, lg: mainMenu })

	return (
		<Box w={['8xl','8xl', '8xl', '9xl', '100%']} bg='#f7fafc'>
			<HStack
				py={['16', '', '16', '6', '5']}
				justify='space-between'
				as={Container}
				maxW={['6xl', '6xl', '6xl', '6xl', '6xl', '6xl']}
				mx='auto'
			>
				<Link href='/'>
					<Image
						cursor='pointer'
						mt='2'
						onClick='/'
						objectFit='contain'
						src='../img/home_logo.png'
						w={['28', '', '24', '16', '40px']}
					/>
				</Link>

				<Flex>{menu}</Flex>
			</HStack>
			<Sticky >
				<Flex
					align='center'
					p={4}
					// display={router.pathname !== '/dashboard' ? "block": 'none'}
					bg='#151a46'
					justifyContent='center'
					fontSize='sm'
					textTransform='uppercase'
					color='gray.400'

					display={
						router.pathname !== '/dashboard' &&
							router.pathname !== '/learnportal' &&
							router.pathname !== '/login' &&
							router.pathname !== '/register' &&
							router.pathname !== '/profile'
							? ['none', 'none', 'none', 'flex']
							: 'none'
					}>
					<Box fontSize={['7xl', '4xl', '5xl', 'xl', 'sm']}>
						{' '}
						<Link href='/' >
							<a className={isActive('/')}>HOME</a>
						</Link>{' '}
					</Box>
					<Box ml={5} fontSize={['7xl', '4xl', '5xl', 'xl', 'sm']}>
						{' '}
						<Link href='/requests'>
							<a className={isActive('/requests')}>REQUESTS</a>
						</Link>
					</Box>
					<Box ml={5} fontSize={['7xl', '4xl', '5xl', 'xl', 'sm']}>
						{' '}
						<Link href='/become_a_tutor'>
							<a className={isActive('/become_a_tutor')}>BECOME A TUTUOR</a>
						</Link>
					</Box>
					<Box ml={5} fontSize={['7xl', '4xl', '5xl', 'xl', 'sm']}>
						{' '}
						<Link href='/faq'>
							<a className={isActive('/faq')}>FAQ</a>
						</Link>{' '}
					</Box>
					<Box ml={5} fontSize={['7xl', '4xl', '5xl', 'xl', 'sm']}>
						{' '}
						<Link href='/about-us'>
							<a className={isActive('/about-us')}>ABOUT</a>
						</Link>{' '}
					</Box>
					<Box ml={5} fontSize={['7xl', '4xl', '5xl', 'xl', 'sm']}>
						{' '}
						<Link href='/support'>
							<a className={isActive('/support')}>SUPPORT</a>
						</Link>
					</Box>
				
				</Flex>
				<Divider borderColor='#151a46' />
			</Sticky>
		</Box>
	)
}
