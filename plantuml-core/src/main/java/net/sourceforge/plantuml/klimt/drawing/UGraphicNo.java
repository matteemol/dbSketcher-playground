// THIS FILE HAS BEEN GENERATED BY A PREPROCESSOR.
package net.sourceforge.plantuml.klimt.drawing;

import java.io.IOException;
import java.io.OutputStream;
import java.util.Map;

import net.sourceforge.plantuml.klimt.UGroupType;
import net.sourceforge.plantuml.klimt.UParam;
import net.sourceforge.plantuml.klimt.UParamNull;
import net.sourceforge.plantuml.klimt.UTranslate;
import net.sourceforge.plantuml.klimt.color.ColorMapper;
import net.sourceforge.plantuml.klimt.color.HColor;
import net.sourceforge.plantuml.klimt.color.HColors;
import net.sourceforge.plantuml.klimt.font.StringBounder;
import net.sourceforge.plantuml.url.Url;

public abstract class UGraphicNo implements UGraphic {
	// ::remove file when __HAXE__

	private final StringBounder stringBounder;
	private final UTranslate translate;

//	private UGraphicNo(UGraphicNo other, UChange change) {
//		this(other.stringBounder,
//				change instanceof UTranslate ? other.translate.compose((UTranslate) change) : other.translate);
//	}

	public UGraphicNo(StringBounder stringBounder, UTranslate translate) {
		this.stringBounder = stringBounder;
		this.translate = translate;
	}

	//
	// Implement UGraphic
	//

	@Override
	final public void startUrl(Url url) {
	}

	@Override
	public void startGroup(Map<UGroupType, String> typeIdents) {
	}

	@Override
	final public void closeUrl() {
	}

	@Override
	final public void closeGroup() {
	}

	@Override
	public ColorMapper getColorMapper() {
		throw new UnsupportedOperationException();
	}

	@Override
	public HColor getDefaultBackground() {
		return HColors.BLACK;
	}

	@Override
	public UParam getParam() {
		return new UParamNull();
	}

	@Override
	public StringBounder getStringBounder() {
		return stringBounder;
	}

	@Override
	public void flushUg() {
	}

	@Override
	public boolean matchesProperty(String propertyName) {
		return false;
	}

	@Override
	public void writeToStream(OutputStream os, String metadata, int dpi) throws IOException {
		throw new UnsupportedOperationException();
	}

	//
	// Internal things
	//

	protected final UTranslate getTranslate() {
		return translate;
	}
}
