'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "18b48a3347e5a4a6b9959961ab9defc7",
".git/config": "62f68ea043011f8156239ac825e82caa",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "81e21e106146cf493afa4e7b9ad5f7e1",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "e208b03a2f3ffd67faa94e705e11a905",
".git/logs/refs/heads/main": "5cc2e2444f15c69bcd787b1184e4cbd0",
".git/logs/refs/remotes/origin/main": "d7593057327caf7940e681c68c2cf588",
".git/objects/00/75f3cc71f5d30b649b42690f0903611508f628": "404b4f19cb0441599e39c0c40165ed50",
".git/objects/00/fb72eab3b7644146290718461eeadb8bca13ca": "1dfd1bc482d02a03f62fbe39992a0f1f",
".git/objects/03/9c9b43156913a296658c739e293660ece5ac80": "57597af074efb80d2194a583383348ec",
".git/objects/04/6a54476daebd402548d5f3d648e7cd8f4e5eb9": "10de0ecef90ef59740c230a2775cc107",
".git/objects/04/a8e9f8932a33bcc0aa71f2061a44e83dec69ac": "8a71541e50cfca4a0f1c2d89caffd87e",
".git/objects/06/82c922e2809f9ccff95276b9591a6027093024": "32e1a55490b45e1afdce5f12887b49b0",
".git/objects/0a/1db34a66265763c358999730d31e62af095fee": "e1e6c2732565190e7e71a4ec6368d534",
".git/objects/0d/0988a7f9cb5ce8ce952648dc7b92b168a7ab80": "54004dafb6e75eb8ac2cc48303850261",
".git/objects/0f/ac63cbe91aac119ae317f666bdf5843f0ddf82": "0e0a6d47e3c66f9b60be9bf17cf7d204",
".git/objects/12/5c284dc2bbed823ed6389e50cc75a8a1ef2351": "9ab0bcea773dc4fd6ef989aef459b28a",
".git/objects/12/69152b5c1c18a6cf06c6d17885b6707f3ca709": "82762e8717adf8df6186dcf4943bba33",
".git/objects/1b/2bcd9a577f921259a2dd0074ce4267344bf623": "e4ca20535c4f566e583e6f350291ba41",
".git/objects/1d/384f3748038966a5c7316223edf120dd5894dd": "a8d542276aa823dfefb8d26439e1077a",
".git/objects/1e/08718450b7a7c74be0a7e2ab9431852c2fcf07": "35ffeb4e78c4c9f0b6fe46e7f45fc63a",
".git/objects/23/66f6c909315a36a5ac0cc698940b7f41f0b057": "2df76cce39e45eabb707de76d172f61c",
".git/objects/24/3ba831fd75ad9be174892f5ad384c6faab952e": "78137eb9a9350018d44d712f472eb0c5",
".git/objects/25/82e536d8275aed9f73b0839dea6e5ce11c10da": "5f1bc827b40e36bb8b079475f2029296",
".git/objects/26/96f16c966b6666d6aba6176f9a1dbf510df0d1": "723e443f8e7bb7cf57e0b1c8aae5fceb",
".git/objects/28/5d3b3a65eb455d410c3bf31fccc8dbbc8cbdbc": "8f13b3e9424f71d09fc00a1d9e39692c",
".git/objects/29/2214367c0af9a2eee8f873b2944224e2fe3f0c": "902d6cf3d5ea70392a74bfc9ded583bb",
".git/objects/2a/bf03542c17e6f7a7806a226c3be732b51c5a40": "4593012a42df8795cd0ae089a5b7aaaf",
".git/objects/2e/868701366ab8f4987738ece1f6f30afded8f9a": "bd83cb73c36612b653a06c585cdc436e",
".git/objects/2e/bc883a0727094f2c27ac85d2a19035449ceffb": "de8fdfd96ae8743ff2cdc48cd0066804",
".git/objects/30/c78919c3e6139693b55b4266d63c1772fe0070": "170faf00cf0facfced9f9f80e38afe11",
".git/objects/31/d26bee2ee5dad40aca8b824908bb2ddb9d8cb4": "ce13fd8689a73fae85cf69bc4fcb69b7",
".git/objects/35/acda2fa1196aad98c2adf4378a7611dd713aa3": "b485406370fdb56248ec4e5fc074fb65",
".git/objects/37/7ead7488ba04497de54363ee4e4436edf85774": "d08a584d3f7b4fb2a65c159d695456ff",
".git/objects/38/355d63729f62aa004c223f826380d79f30d7a4": "8748b2ef017610f54e3b251149b10e85",
".git/objects/3b/bceb840e78a146a4383fdeb153517a593a59f5": "dba207eb686ea19148cd1b16ca8f9561",
".git/objects/3d/3ee4a025d1a1fec87536562b0afd3dfab395d8": "218dfe4f265f5332ac4dc38e673346cc",
".git/objects/3d/be1754601fc3f470940dc72b355e4d5c53123e": "1d4e40098e2ed75aebf4b363288a6345",
".git/objects/44/7f32837dbd0424afaa8f3e9c6c168f6a8aa1ec": "922e57a27dddaf2c4f4832cd880f0229",
".git/objects/44/c04cd53d2cbd457a676c937937ff455ebe4c41": "f4597ea0d52718643e202c78f94fc28c",
".git/objects/45/1f327d861e3b49c5bf487036a2a8fa9a2f8a75": "68920df6dd8f7a6f54e2f43f9052e12c",
".git/objects/49/698e74205843ebf63e7af48dda68e5b6fde879": "c35a3360410ae549c879baf34348f2e8",
".git/objects/49/938d3f0c07beb7194c72b623c46ebc2acc28a1": "c52513b902ead034bc9a32ad0ecef9b8",
".git/objects/4b/ce11f832f26ee264d95b6790237601cf5a6088": "d9243641979aa81a886b057ab392745a",
".git/objects/4d/3eb81bd9a4b555cc692ca7119b85c294cec94a": "4b57514279fb607c0b3112c8f737a8ac",
".git/objects/4f/923ec62a662a244c3e7958afc718e2c529504e": "01f74fa897aa0a06d94d0660c8143f91",
".git/objects/54/70762e4d31c273bae6199fa31c65a45c128a9a": "72b07d90ea411983d00b821ba59d46cd",
".git/objects/55/919b0b32f21410d9755ffbe64aeb2d07650744": "ffb88073b04c5f9454f1e7f08edc733c",
".git/objects/57/b7eb1a07effdba3f59a41d256b607b23307e94": "62459f0b922dde14f8d8e5c57b97ed99",
".git/objects/58/23f235db21947f922e6b214ff57f3dac2defc8": "b664b370f6249abc0774b747104f83f5",
".git/objects/5a/ea7fcf037c5dfcd2bb241cb3b9bc99a8418316": "2e6ad223efb5eb600a15812506d63e62",
".git/objects/5c/07d89c08b8ccf6a585f51fefea5c36e2eaad1e": "f44e983de282c003bf5671c98b79fe16",
".git/objects/5c/cf5b7f5d237acbd41d1f514af278bb0995211e": "884d9dc10ee3b91a8f2ccc499c69f54e",
".git/objects/63/14113992a654fd8365d8f29babff4efaff8162": "2ef978e815cacbe8f1a118000b17eac9",
".git/objects/66/47d1db8af6af2f4b9b8f9a48004360d518a1f8": "6f1eaa12fe0643b6bc3cae1723f96905",
".git/objects/68/68f7bb64ba71b131690286ddc82aa0f542293e": "b6aeab417f5d5ef28ea070a09b61c7e0",
".git/objects/6a/562868741911ffc3a5345f3c094a71eb0d073d": "ad3237b80e6dc65be0e2000c6c0a445f",
".git/objects/6c/ce217ddc2efe3411dc9fa34e294e48e4cdf4f5": "8a6cc32e7f23f25e611213b06bb38448",
".git/objects/6e/cb68683477ecc5aed38ec3fc8910d9bb66276c": "8081799c6f0d89b405c8cca2b18cd6da",
".git/objects/6e/eafba0dcea06a2177a8e73e098c8c8db898620": "127f2f716ed98faa6e260419da112a69",
".git/objects/71/9442d420a9c3d8df77d85b6f6ea1bc55bd39cc": "f0f785e8e884c8c1befbda9dcd273a1d",
".git/objects/73/43e149d0d97ac575d217df450135a00491c245": "c1fb576ac1aa489b0721d6f0a687c1e9",
".git/objects/73/a5ca9e6ea457a8e87e3e88047b9268f15bb75b": "437e873491b95548ba60fecc00fa7933",
".git/objects/75/1a6492e947e32622e577d9ad73ee19c7ffb50f": "b9a2e820e585385dcc640904a75be8cf",
".git/objects/76/d91cb9895982d66c398f9da3daa61470488fb6": "eb9c926b9504ff85b80091feb21a6b60",
".git/objects/78/1ab2ba2a51f026185ec43fcfd7b7194896d510": "2287d24b208dfa148fbad1dc75269118",
".git/objects/79/25736cd879d54707b86c2faafc7a264c0fe63b": "c9df9d75d765771a900c6f50f9f3c731",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/7e/d19ed6484081ec9234da883033a2efdad7e3f8": "33505381a008594fb2442c8cedfced30",
".git/objects/81/f8da657f4d111d76b4d2cd5a7411b77310dc0d": "8b8ee3407d538b030f8eb735009c6074",
".git/objects/82/fcdf61f390b5e27fb9953a8f70af5978abc4b4": "3edbb359a8a5494ce72cd4be090b7253",
".git/objects/83/37d24634a2095774a51099b41cad0cd59fa94b": "1a120da8a5736743061c89558bd98ae1",
".git/objects/85/520947cb03009d2b0dc9f1ad1f279dedb6b284": "38ed0db24813288911428ccbf5b13244",
".git/objects/86/ab05c7ce9c82cc0736201fdaae3f7622cad52c": "e8c1c6024d001ae21d73e858f599007f",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/89/283193e216dcafc61b1a75c82d7768fa264ff0": "4a66cf9d0e263e8edca7589ceb241ef4",
".git/objects/89/59450f2393cb840c547061e3d4629c58f97d2d": "69ec0ea4110cf569127edaec310cb800",
".git/objects/8a/92906733bac1c21951e7e7106cc8574f3a907b": "1bf4a4f0926580ec62ab1de94f133e70",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8a/de8514576211aa290163d71a1ca3e91db5800f": "cc2e077d2db4e8bd39cb2aef81346059",
".git/objects/8c/20c5be1cd3d65123fcffaf064484566360ca51": "cf88e5ce89e88b14170a2604d8e946dd",
".git/objects/8c/99266130a89547b4344f47e08aacad473b14e0": "41375232ceba14f47b99f9d83708cb79",
".git/objects/8d/5b0117903151f6089b475959bf32b7f3311151": "5f3f8a06517b32122dd1eac9fd679695",
".git/objects/8e/7f4b338840099949781ab85496d7a67fae46f1": "7f2803c236e9e7d95ef6ed16a3a2bd13",
".git/objects/8e/aae1a76a8a640ee229dce1137afeee922ba751": "992e25c4ac7675a5aff2a2e1ab8ddd8d",
".git/objects/8f/29582f220207af29a49d5615a1ab9605be14e6": "c3b6c4ef432774711bdb7334bb336f54",
".git/objects/90/a491b8249a58a5a98383c3cefc5e7a395b09ef": "6476d744f3f959b8494116032ba2a70d",
".git/objects/92/9e83b4ccc05a7cd031d0e5ea6cad8418e6415d": "bb0366746cd4d12005c4b8e790fd4ffa",
".git/objects/96/e2e81a3d1e00f2638000e2110075d3af23cfbe": "fa5d75dadf587cc64c82eaf9de652f15",
".git/objects/98/6c71453c88c342b4af36e496fe484decc416af": "a5e8218c5ea309c99136904f3463f9f6",
".git/objects/9b/2a29405b71f8a411bfb7044c2a13ac1e6881c5": "36d59f3e2ad9379232ab519a868e1b5a",
".git/objects/9b/767a195e7de39bd42d7eafbb3aefc5078b83ed": "8a6f37d09728567bfa7f6eb9a05d67db",
".git/objects/9c/3300677a46847ad45360a1d07a8ca10e93bebb": "6a85ac61f8df9f71f7581c47e85635b7",
".git/objects/9e/21042f316dbbd295934750dd1111dea13328a6": "69f5ce6ea962d83eba81fdc64a5b595f",
".git/objects/9e/be22c75ce31659f7e61c5907e4283a645171f7": "a37c87055ef6582e89fbd493c7443c56",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/a5/47d7530b17547f40e077669375b1875461b335": "9e2b85de372e6f80ffa977145f86f3c4",
".git/objects/a5/b2302071383975dd6e5b3db7e4657d3a19f396": "bcfe15366c47722034901ace8d096f5e",
".git/objects/aa/f9775aa89c03137dbf48721cdc05191703de5e": "25802b31f0bee36b4e1a7a67835f99f0",
".git/objects/ae/37803d1933c3979fd1b939ff61cc667b0b70dc": "f5c08c98e82ebd9034dbd78b64a292fa",
".git/objects/b1/6f96fc3b096ef898b715f16681d7557ed1a4f4": "f7434bf201006dff1d913d000876fa42",
".git/objects/b7/02168c6b5aa9edc3e868b83c391b9b526a4ce0": "67a0eef3a042f755f7da0048dcb49992",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b7/ad1ed03a78713c13d94fd060eba1cd195c2f3d": "78daa4d07b1635efa9af88e570fdd2d6",
".git/objects/b8/eb1ebb69b526a9b7d8d2e5f5349aad5916e792": "8827c01ea0f8b1060dabce8af06d9e3c",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/ba/873595714be0aed5b3f40c3f409125d58b741e": "090eab633a2fc6144387ae5913e6fe15",
".git/objects/bd/f438bbd329d17c9a6a693a4444603f7ab55974": "75d18078154310949fd966e63a376e82",
".git/objects/bf/b34b1d678c1de94ad5a4c659a165e3a8018c38": "1eff6aa3b513324b37786ae0a4a4accf",
".git/objects/c0/76d49b8c064db50dde2ad377729a43654d4ce1": "4f55cb89aa93627f474c06586d8fa35d",
".git/objects/c1/2d609632b8988806e6d6657501401460493dac": "82f81eb3975d91482b44ead9dc7dc7a2",
".git/objects/c1/759948fc0bd9456dd9edf4a10279bc9a3075e3": "e553e42fdcbdd65fcca409de68048c6e",
".git/objects/c1/e44f583336d6971d8c9219749be0ee3943c180": "0a84c27770455ee584fc1bdc64907be2",
".git/objects/c4/7a50c306b59c686b1eb2a28967b821dc01f546": "58fc60cc209b115d1bb4e9da6e013d70",
".git/objects/c7/83ecea668e3774e29ceab9f3a3822525edb636": "9a178c9c275d330b970b45b12f2a005d",
".git/objects/c8/598afd214684cc585f74d9986dd92ec719c139": "e2cdf9d9429f0e010a2972d921921bb8",
".git/objects/c8/c891e3a62b8035d256e2bfec6874e907f010c3": "466b8c5766f3c4ee7589f309832c49de",
".git/objects/c8/ceca3e233d3e0aed0a78a5073b5a6b287c61cd": "2c063b2487690498f2ba0ab804878fe3",
".git/objects/ca/6a6bee8d0267444ee825b830e0f9c44356e8fa": "3bbd5bdb01d28f811c2e2f84c747cbb7",
".git/objects/cb/f071087459a88098dc19bd47f29e495e650a23": "f188568c095559eba98c66ec93d85fad",
".git/objects/cc/8277c704ed016b6661ecfdf9a5bc9f3cae91c0": "48dace255028600913137fd54457f2bd",
".git/objects/cc/9b798ad8043dbd79288c42f784809cf2620ff8": "6c8b5eb8d911d01a408c14ec939128ac",
".git/objects/cd/c756baa6468b383d8d4c8e11e3401c33d862d8": "b24b87026be558a879c9544628385635",
".git/objects/cf/b893e4eec2935085c52c85c6f6bee3c9766a01": "b1ca02fde1c14e9875f9065f39a82da7",
".git/objects/d0/a2f865ed809646ff545a3c2e4c0bc71b98a406": "a3e161d152629398ed3b3d98be9922f3",
".git/objects/d1/ac9ba1169e4076832034c5585e1c5bf9d6f83c": "876bc5615b97dd6984ed3a864ba27059",
".git/objects/d3/7c6101caf9ee5d2a13e65dd6b41848d1ce15de": "432c9cb1754879402fb7f4446532561b",
".git/objects/d4/02d4dc71e2f90924f06d2fcb50653b46ba2db5": "d9dbc2e5f80fd51f9e980e852600c797",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d8/bf22ba62d3e7cf2d4622f689f5c20183852143": "377e93d1fe80f3ede8b5162ea7b9cb00",
".git/objects/d8/f42b22ec2d242ea146d2cda490cb192c114e47": "261f67aceb49cb4a0de02b9cdbb98996",
".git/objects/dd/f61e2b0b89515994b72555013b3f585770f565": "9141cf76ba5faca2de4d3438d143618d",
".git/objects/e1/075305b0c890295f64618429e74b11a7c68c9e": "312de7adc798bb5308d91e010a47aea3",
".git/objects/e1/1173a1aede8f2c708580e5671dcab0c58f8c1a": "794966e073aa6b1ea0297b8c5ebd4a9e",
".git/objects/e1/e2b45575bf2368688d49113ad14482b9bfc86d": "1d85e7038338be0d7d7676463423d051",
".git/objects/e2/b5fbb02fd0ce400780207ac39d203a319af7bb": "4bb073efbd374cfa8e7e0d1b0377cd4c",
".git/objects/e4/879ae91b7c6bb391ca3cee34af6857561644f6": "92fe2179cb6b1e4823388477bddfc702",
".git/objects/e5/0801b3b620af91f824c7655df7d064db05b764": "3a034b2609afa6f9a14cf62c9fb57254",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/eb/a91e4cd19ef4549a79bb643a1717d99693240a": "1f2d1e90f22d4ce051d3438ee7757dc8",
".git/objects/f1/6b586918ae57b838e8c23711d7ff36727d69ca": "75d81a07f217b8831742764c638708b6",
".git/objects/f3/3e8162997aaa9da582aa81428ee87aa48953a6": "fc158db0779aaef1b463487bc31157f0",
".git/objects/f8/daedca4515bb70b84038c6c447022f868f57ab": "6a10cef0b99704e835bd0f233ca880ac",
".git/objects/f9/32fbb10fc96d398cb2201a57b8f53bfece253e": "70c2af77bcf923770bb373161afede95",
".git/objects/fc/567cd2f11d83683d9eb4ca1a5fdc912f7d417c": "a043e3e370f27b8721ecd4c53e4c975e",
".git/objects/fc/f9b7ca5b7f60075ab3609fc55bd7b07951f42a": "2fa3412d714f36e1381cd431e62ca29a",
".git/objects/ff/8ed34060b68932972aa2b3258510b4ff71a51f": "a7d067748657911bc51bc28febc52c01",
".git/objects/ff/ed83ed1f589fb6576162faf87ae529b5c9392f": "8e9dc88c078e20c0acc8c4f919bcf88c",
".git/refs/heads/main": "8265114cbd6018b488970313176209cb",
".git/refs/remotes/origin/main": "8265114cbd6018b488970313176209cb",
"assets/AssetManifest.bin": "cfdc353167e82713c3c0b5ffc50d0467",
"assets/AssetManifest.json": "b9129e1614b577083b4b2583096f5d3b",
"assets/assets/creta_default.png": "cf1eb68da282f005cc5cbf8a6c3d9d8c",
"assets/assets/creta_logo_blue.png": "bafadae9d8eddb17987e77ba49c0d13b",
"assets/assets/grid.png": "49c4f3bcb1b25364bb4c255edcaaf5b2",
"assets/assets/hycop_config.json": "0f7cdaf6af8e8992cf3538c243601058",
"assets/assets/logo_en.png": "a6de38b7f004ea361acfbc9ed98a447e",
"assets/FontManifest.json": "39ddf49a2396b04049ce1ebe5648e495",
"assets/fonts/MaterialIcons-Regular.otf": "9a819a344dccaee2eacdf417e43567a2",
"assets/fonts/Pretendard/Pretendard-Black.otf": "a0dae583b0afcf6f07f170fe75c07642",
"assets/fonts/Pretendard/Pretendard-Bold.otf": "0c28c1f5ba0bcdfb02688cc77186c89d",
"assets/fonts/Pretendard/Pretendard-ExtraBold.otf": "44ba46bad2096044f462bc5ec1d28915",
"assets/fonts/Pretendard/Pretendard-ExtraLight.otf": "fc5c7c8047bbdaf09f8813d1fe3165ac",
"assets/fonts/Pretendard/Pretendard-Light.otf": "d39b4dd5b80382ea3b767f805de6ee92",
"assets/fonts/Pretendard/Pretendard-Medium.otf": "c40957def7f8380b7ab0aa28e594ab1d",
"assets/fonts/Pretendard/Pretendard-Regular.otf": "d1e2411be87335a335df2d824eacf3f0",
"assets/fonts/Pretendard/Pretendard-SemiBold.otf": "5c328494b7eabdb6942b76d5fb4d48e0",
"assets/fonts/Pretendard/Pretendard-Thin.otf": "1095c717674530e8a42bd9d4c4aede43",
"assets/NOTICES": "750f1c5332e37fccab51dde25a7adee9",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "57d849d738900cfd590e9adc7e208250",
"assets/packages/flex_color_picker/assets/opacity.png": "49c4f3bcb1b25364bb4c255edcaaf5b2",
"assets/packages/flutter_dropzone_web/assets/flutter_dropzone.js": "0266ef445553f45f6e45344556cfd6fd",
"assets/packages/flutter_vector_icons/fonts/AntDesign.ttf": "3a2ba31570920eeb9b1d217cabe58315",
"assets/packages/flutter_vector_icons/fonts/Entypo.ttf": "31b5ffea3daddc69dd01a1f3d6cf63c5",
"assets/packages/flutter_vector_icons/fonts/EvilIcons.ttf": "140c53a7643ea949007aa9a282153849",
"assets/packages/flutter_vector_icons/fonts/Feather.ttf": "a76d309774d33d9856f650bed4292a23",
"assets/packages/flutter_vector_icons/fonts/FontAwesome.ttf": "b06871f281fee6b241d60582ae9369b9",
"assets/packages/flutter_vector_icons/fonts/FontAwesome5_Brands.ttf": "3b89dd103490708d19a95adcae52210e",
"assets/packages/flutter_vector_icons/fonts/FontAwesome5_Regular.ttf": "1f77739ca9ff2188b539c36f30ffa2be",
"assets/packages/flutter_vector_icons/fonts/FontAwesome5_Solid.ttf": "605ed7926cf39a2ad5ec2d1f9d391d3d",
"assets/packages/flutter_vector_icons/fonts/Fontisto.ttf": "b49ae8ab2dbccb02c4d11caaacf09eab",
"assets/packages/flutter_vector_icons/fonts/Foundation.ttf": "e20945d7c929279ef7a6f1db184a4470",
"assets/packages/flutter_vector_icons/fonts/Ionicons.ttf": "b3263095df30cb7db78c613e73f9499a",
"assets/packages/flutter_vector_icons/fonts/MaterialCommunityIcons.ttf": "b62641afc9ab487008e996a5c5865e56",
"assets/packages/flutter_vector_icons/fonts/MaterialIcons.ttf": "8ef52a15e44481b41e7db3c7eaf9bb83",
"assets/packages/flutter_vector_icons/fonts/Octicons.ttf": "f7c53c47a66934504fcbc7cc164895a7",
"assets/packages/flutter_vector_icons/fonts/SimpleLineIcons.ttf": "d2285965fe34b05465047401b8595dd0",
"assets/packages/flutter_vector_icons/fonts/Zocial.ttf": "1681f34aaca71b8dfb70756bca331eb2",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "99f29024aee8f4672a47cc3a81b9b84a",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "48ce1bb8a42776caa951cb782d277730",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "d8e9b6203ce2657c991f0b339ccb3a6d",
"assets/shaders/ink_sparkle.frag": "57f2f020e63be0dd85efafc7b7b25d80",
"canvaskit/canvaskit.js": "1338eccfe817956d34753284f2b1cdf6",
"canvaskit/canvaskit.wasm": "78daff025a185d11c6a08349e295f9eb",
"canvaskit/profiling/canvaskit.js": "c21852696bc1cc82e8894d851c01921a",
"canvaskit/profiling/canvaskit.wasm": "371bc4e204443b0d5e774d64a046eb99",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "2910b04607a7dd7ab1aa3d916ef5cfff",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "aff3d9e9602e5d121b895287bd25100b",
"/": "aff3d9e9602e5d121b895287bd25100b",
"main.dart.js": "da97f94f1bea7866eed67eea95de5009",
"manifest.json": "10c4c2a8c89b772ff830f2ce83fa630d",
"version.json": "534c1d2f16718b3387f30c1432052801"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
