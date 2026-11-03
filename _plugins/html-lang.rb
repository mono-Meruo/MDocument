# just-the-docs は <html lang> に site.lang を使うが、Polyglot は site.active_lang しか設定しないため全言語が en-US になっていた。
Jekyll::Hooks.register :site, :pre_render do |site|
  site.config["lang"] = site.data.dig("language", site.active_lang, "code") || site.active_lang
end
