const dotenv = require('dotenv');
dotenv.config({ path: '.env.local' });
const { createClient } = require('@supabase/supabase-js');
const fs = require('fs');
const path = require('path');

async function restoreAllImages() {
  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY || process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

  if (!supabaseUrl || !supabaseKey) {
    console.error('Missing Supabase credentials in .env.local');
    return;
  }

  const supabase = createClient(supabaseUrl, supabaseKey);

  console.log('Querying all records from project_images table...');
  const { data: rows, error } = await supabase.from('project_images').select('*');
  if (error || !rows) {
    console.error('Error fetching project_images:', error);
    return;
  }

  console.log('Found ' + rows.length + ' image records in Supabase:');
  const staticDir = path.join(process.cwd(), 'public', 'images', 'static');
  if (!fs.existsSync(staticDir)) {
    fs.mkdirSync(staticDir, { recursive: true });
  }

  const jsonMapping = {};

  for (const row of rows) {
    const slotId = row.id;
    const url = row.image_url;
    if (!slotId || !url) continue;

    let ext = '.jpg';
    if (url.toLowerCase().endsWith('.png')) ext = '.png';
    else if (url.toLowerCase().endsWith('.webp')) ext = '.webp';
    else if (url.toLowerCase().endsWith('.jpeg')) ext = '.jpeg';

    const fileName = slotId + ext;
    const filePath = path.join(staticDir, fileName);

    console.log('Processing slot [' + slotId + ']: ' + url);
    try {
      const res = await fetch(url);
      if (res.ok) {
        const buffer = Buffer.from(await res.arrayBuffer());
        fs.writeFileSync(filePath, buffer);
        jsonMapping[slotId] = '/images/static/' + fileName;
        console.log(' -> Saved ' + fileName + ' (' + buffer.length + ' bytes)');
      } else {
        console.warn(' -> Failed download from ' + url + ' (HTTP ' + res.status + ')');
        jsonMapping[slotId] = url;
      }
    } catch (err) {
      console.error(' -> Download error:', err);
      jsonMapping[slotId] = url;
    }
  }

  const jsonPath = path.join(process.cwd(), 'src', 'data', 'project-images.json');
  fs.writeFileSync(jsonPath, JSON.stringify(jsonMapping, null, 2), 'utf-8');
  console.log('\nSuccessfully updated ' + jsonPath);
  console.log(JSON.stringify(jsonMapping, null, 2));
}

restoreAllImages();
