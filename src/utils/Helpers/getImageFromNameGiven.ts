import CODIW from '../../assets/images/call-of-duty-infinite-warfare.png'
import CODWW2 from '../../assets/images/call-of-duty-wwii.png'
import FIFA18 from '../../assets/images/fifa-18.png'
import HZD from '../../assets/images/horizon-zero-dawn.png'
import MK11 from '../../assets/images/mortal-kombat-xl.png'
import SOD from '../../assets/images/shards-of-darkness.png'
import SMOdyssey from '../../assets/images/super-mario-odyssey.png'
import SHADOWOFMORDOR from '../../assets/images/terra-media-sombras-de-mordor.png'
import TWITCHER3 from '../../assets/images/the-witcher-iii-wild-hunt.png'

export default function getImageFromNameGiven(name: string): string {
	switch (name) {
		case 'super-mario-odyssey.png':
			return SMOdyssey
		case 'call-of-duty-infinite-warfare.png':
			return CODIW
		case 'the-witcher-iii-wild-hunt.png':
			return TWITCHER3
		case 'call-of-duty-wwii.png':
			return CODWW2
		case 'mortal-kombat-xl.png':
			return MK11
		case 'shards-of-darkness.png':
			return SOD
		case 'terra-media-sombras-de-mordor.png':
			return SHADOWOFMORDOR
		case 'fifa-18.png':
			return FIFA18
		case 'horizon-zero-dawn.png':
			return HZD
		default:
			return 'not found'
	}
}
