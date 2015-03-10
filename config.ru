use Rack::Static,
  :urls => ['/assets/img', '/assets/js', '/assets/css', '/assets/fonts'],
  :root => 'public'

map '/' do
  run lambda { |env|
  [
    200, 
    {
      'Content-Type'  => 'text/html', 
      'Cache-Control' => 'public, max-age=86400' 
    },
    File.open('public/index.html', File::RDONLY)
  ]
}
end

map '/about.html' do
  run lambda { |env|
  [
    200, 
    {
      'Content-Type'  => 'text/html', 
      'Cache-Control' => 'public, max-age=86400' 
    },
    File.open('public/about.html', File::RDONLY)
  ]
}
end

map '/resume.html' do
  run lambda { |env|
  [
    200, 
    {
      'Content-Type'  => 'text/html', 
      'Cache-Control' => 'public, max-age=86400' 
    },
    File.open('public/resume.html', File::RDONLY)
  ]
}
end

map '/resume.pdf' do
  run lambda { |env|
  [
    200, 
    {
      'Content-Type'  => 'application/pdf',
      'Cache-Control' => 'public, max-age=86400' 
    },
    File.open('public/Sugan_Resume.pdf', File::RDONLY)
  ]
}
end

map '/contact.html' do
  run lambda { |env|
  [
    200, 
    {
      'Content-Type'  => 'text/html', 
      'Cache-Control' => 'public, max-age=86400' 
    },
    File.open('public/contact.html', File::RDONLY)
  ]
}
end

map '/work.html' do
  run lambda { |env|
  [
    200, 
    {
      'Content-Type'  => 'text/html', 
      'Cache-Control' => 'public, max-age=86400' 
    },
    File.open('public/work.html', File::RDONLY)
  ]
}
end

map '/googledcf072b84a71581a.html' do
  run lambda { |env|
  [
    200, 
    {
      'Content-Type'  => 'text/html', 
      'Cache-Control' => 'public, max-age=86400' 
    },
    File.open('public/googledcf072b84a71581a.html', File::RDONLY)
  ]
}
end