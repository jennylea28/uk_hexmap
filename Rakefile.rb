require 'rake'
require 'closure-compiler'

class String
  def indent(whitespace)
    gsub(/^(?=.)/, whitespace)
  end
end

def write(file, contents)
  STDERR.puts "+ #{file}"

  File.open(file, 'w+') { |file| file.puts(contents) }
end

def minify(source)
  ($closure_compiler ||= Closure::Compiler.new).compile(source)
end

def compile(chart_function, output_file)
  source = File.read('src/common.js')

  source.sub!(/^([ ]+)function chart\(\) \{ \}$/) do
    whitespace = $1

    File.read(chart_function).strip.indent(whitespace)
  end

  source << "\n"
  source << File.read('src/constituencies.js')

  write(output_file, source)
  write(output_file.sub('.js', '.min.js'), minify(source))
end

task :default => :compile

task :compile do
  compile('src/d3.js', 'uk.electionmap.d3.js')
  compile('src/raphael.js', 'uk.electionmap.raphael.js')
end
