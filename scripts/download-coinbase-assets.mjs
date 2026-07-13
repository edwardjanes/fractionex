#!/usr/bin/env node
import fs from 'fs-extra';
import path from 'path';
import https from 'https';
import http from 'http';

const ASSETS_DIR = path.join(process.cwd(), 'public/images/coinbase');
const ICONS_DIR = path.join(process.cwd(), 'public/icons/coinbase');

// List of assets extracted from the page
const ASSETS_TO_DOWNLOAD = [
  // Hero and branding
  {
    url: 'https://static-assets.coinbase.com/ui-infra/illustration/v1/pictogram/svg/light/coinbaseLogoNavigation-4.svg',
    filename: 'coinbase-logo.svg',
  },

  // Navigation upsells
  {
    url: 'https://images.ctfassets.net/o10es7wu5gm1/4p8o5d70qLPCxlaQVVJSGx/e60abb56979780f1a652a16051471f53/GTM26233_PredictionsWorldCup_04_GlobalNav_Upsell_1x1_Static_angle_01_v3_600x600-ALT.png',
    filename: 'nav-cb1-upsell.png',
  },
  {
    url: 'https://images.ctfassets.net/o10es7wu5gm1/67upNlpt3s3S3CzdLnoZtJ/537ebeaf8595e2cf40c87e1023abf94d/Nav_Thumbnail__1_.png',
    filename: 'nav-business.png',
  },
  {
    url: 'https://static-assets.coinbase.com/growth/acquisition/global-nav/upsell/institutions_upsell.png',
    filename: 'nav-institutions.png',
  },
  {
    url: 'https://static-assets.coinbase.com/growth/acquisition/global-nav/upsell/developers_upsell_cdxv2_2.jpg',
    filename: 'nav-developers.jpg',
  },
  {
    url: 'https://static-assets.coinbase.com/growth/acquisition/global-nav/upsell/company_upsell.png',
    filename: 'nav-company.png',
  },

  // Feature images
  {
    url: 'https://images.ctfassets.net/o10es7wu5gm1/DXJa9h8DMvK8TSyQpQ8ya/57ef794709555f38da789e4eb61fc74c/260220_CB_DEX_UK_Blog_image_720%C3%83_540px.png',
    filename: 'trending-crypto.png',
  },
  {
    url: 'https://images.ctfassets.net/o10es7wu5gm1/4Jpa7fudq9ntnjk076KMCS/20e67b95d5d9869ec678653d79528df3/GWT25547_Promo_Carousel_CDX2_776x582_2x.png',
    filename: 'earn-promo.png',
  },
  {
    url: 'https://images.ctfassets.net/o10es7wu5gm1/16pWV4ctYBmuHnZ9K9jFeL/3979d8aae0a8d31d48d15b437b46d766/What_is_Staking.png',
    filename: 'staking-feature.png',
  },

  // Crypto asset icons (128px versions)
  {
    url: 'https://dynamic-assets.coinbase.com/e785e0181f1a23a30d9476038d9be91e9f6c63959b538eabbc51a1abc8898940383291eede695c3b8dfaa1829a9b57f5a2d0a16b0523580346c6b8fab67af14b/asset_icons/b57ac673f06a4b0338a596817eb0a50ce16e2059f327dc117744449a47915cb2.png',
    filename: 'crypto-bitcoin.png',
  },
  {
    url: 'https://dynamic-assets.coinbase.com/dbb4b4983bde81309ddab83eb598358eb44375b930b94687ebe38bc22e52c3b2125258ffb8477a5ef22e33d6bd72e32a506c391caa13af64c00e46613c3e5806/asset_icons/4113b082d21cc5fab17fc8f2d19fb996165bcce635e6900f7fc2d57c4ef33ae9.png',
    filename: 'crypto-ethereum.png',
  },
  {
    url: 'https://dynamic-assets.coinbase.com/41f6a93a3a222078c939115fc304a67c384886b7a9e6c15dcbfa6519dc45f6bb4a586e9c48535d099efa596dbf8a9dd72b05815bcd32ac650c50abb5391a5bd0/asset_icons/1f8489bb280fb0a0fd643c1161312ba49655040e9aaaced5f9ad3eeaf868eadc.png',
    filename: 'crypto-tether.png',
  },
  {
    url: 'https://asset-metadata-service-production.s3.amazonaws.com/asset_icons/c347b6d1a7624e24c4e90089a69dfc8fb75523daf8eeb88007372a0c3a30d428.png',
    filename: 'crypto-bnb.png',
  },
  {
    url: 'https://dynamic-assets.coinbase.com/3c15df5e2ac7d4abbe9499ed9335041f00c620f28e8de2f93474a9f432058742cdf4674bd43f309e69778a26969372310135be97eb183d91c492154176d455b8/asset_icons/9d67b728b6c8f457717154b3a35f9ddc702eae7e76c4684ee39302c4d7fd0bb8.png',
    filename: 'crypto-usdc.png',
  },
  {
    url: 'https://dynamic-assets.coinbase.com/e81509d2307f706f3a6f8999968874b50b628634abf5154fc91a7e5f7685d496a33acb4cde02265ed6f54b0a08fa54912208516e956bc5f0ffd1c9c2634099ae/asset_icons/3af4b33bde3012fd29dd1366b0ad737660f24acc91750ee30a034a0679256d0b.png',
    filename: 'crypto-xrp.png',
  },

  // Illustrated icons
  {
    url: 'https://static-assets.coinbase.com/ui-infra/illustration/v1/pictogram/svg/light/worldwide-3.svg',
    filename: 'icon-worldwide.svg',
  },
  {
    url: 'https://static-assets.coinbase.com/ui-infra/illustration/v1/pictogram/svg/light/safe-3.svg',
    filename: 'icon-safe.svg',
  },
  {
    url: 'https://static-assets.coinbase.com/ui-infra/illustration/v1/pictogram/svg/light/support-5.svg',
    filename: 'icon-support.svg',
  },

  // Social
  {
    url: 'https://static-assets.coinbase.com/marketing/cdx/x-light.svg',
    filename: 'icon-x.svg',
  },
];

// Crypto icon SVGs that should be extracted
const CRYPTO_ICONS = {
  bitcoin: 'Bitcoin',
  ethereum: 'Ethereum',
  tether: 'Tether',
  bnb: 'BNB',
  usdc: 'USDC',
  xrp: 'XRP',
};

async function downloadFile(url, filePath) {
  return new Promise((resolve, reject) => {
    const protocol = url.startsWith('https') ? https : http;
    const file = fs.createWriteStream(filePath);

    protocol.get(url, (response) => {
      // Handle redirects
      if (response.statusCode === 301 || response.statusCode === 302) {
        fs.remove(filePath);
        return downloadFile(response.headers.location, filePath).then(resolve).catch(reject);
      }

      if (response.statusCode !== 200) {
        file.destroy();
        fs.remove(filePath);
        reject(new Error(`Failed to download ${url}: ${response.statusCode}`));
        return;
      }

      response.pipe(file);
      file.on('finish', () => {
        file.close();
        resolve();
      });
    }).on('error', (err) => {
      fs.remove(filePath);
      reject(err);
    });
  });
}

async function downloadAssets() {
  console.log('🚀 Starting Coinbase asset download...\n');

  // Create directories
  await fs.ensureDir(ASSETS_DIR);
  await fs.ensureDir(ICONS_DIR);

  let downloaded = 0;
  let failed = 0;

  // Download assets in batches
  const BATCH_SIZE = 4;
  for (let i = 0; i < ASSETS_TO_DOWNLOAD.length; i += BATCH_SIZE) {
    const batch = ASSETS_TO_DOWNLOAD.slice(i, i + BATCH_SIZE);
    await Promise.all(batch.map(async (asset) => {
      const filePath = asset.filename.endsWith('.svg')
        ? path.join(ICONS_DIR, asset.filename)
        : path.join(ASSETS_DIR, asset.filename);

      try {
        await downloadFile(asset.url, filePath);
        console.log(`✓ Downloaded: ${asset.filename}`);
        downloaded++;
      } catch (error) {
        console.error(`✗ Failed: ${asset.filename} - ${error.message}`);
        failed++;
      }
    }));
  }

  console.log(`\n✅ Download complete: ${downloaded} succeeded, ${failed} failed\n`);

  // Create placeholder hero video reference
  const videoRef = path.join(ASSETS_DIR, 'hero-video.webm');
  await fs.writeFile(videoRef, '# This file should be downloaded manually from:\n# https://static-assets.coinbase.com/marketing/videos/homepage_GB_744.webm\n');
  console.log('📹 Hero video reference created. Download manually due to size.');
}

downloadAssets().catch(console.error);
