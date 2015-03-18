class YouTube < Liquid::Tag
  Syntax = /^\s*([^\s]+)(\s+(\d+)\s+(\d+)\s*)?/

  def initialize(tagName, markup, tokens)
    super

    if markup =~ Syntax then
      @id = $1

     if $2.nil? then
          @ratio = "16by9"
     end
    else
      raise "No YouTube ID provided in the \"youtube\" tag"
    end
  end

  def render(context)
   # "<iframe width=\"#{@width}\" height=\"#{@height}\" src=\"http://www.youtube.com/embed/#{@id}?color=white&theme=light\"></iframe>"
    "<div class=\"embed-responsive embed-responsive-#{@ratio}\"><iframe src=\"https://www.youtube.com/embed/#{@id}\" allowfullscreen></iframe></div>"
  end

  Liquid::Template.register_tag "youtube", self
end