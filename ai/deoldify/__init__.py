import sys
import logging
logging.getLogger().addHandler(logging.StreamHandler(sys.stdout))
logging.getLogger().setLevel(logging.INFO)

from ai.deoldify._device import _Device

device = _Device()